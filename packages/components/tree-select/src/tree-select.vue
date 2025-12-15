<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue'
import { pick } from 'lodash-unified'
import ElSelect from '@element-plus/components/select'
import ElTree from '@element-plus/components/tree'
import { useSelect } from './select'
import { useTree } from './tree'
import CacheOptions from './cache-options'

import type { TreeInstance } from '@element-plus/components/tree'
import type { SelectInstance } from '@element-plus/components/select'

export default defineComponent({
  name: 'ElTreeSelect',
  // disable `ElSelect` inherit current attrs
  inheritAttrs: false,
  props: {
    ...ElSelect.props,
    ...ElTree.props,
    /**
     * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
     */
    cacheData: {
      type: Array,
      default: () => [],
    },
    /**
     * @description 跨节点同步勾选的字段名（透传给 el-tree）
     */
    syncCheckKey: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const { slots, expose } = context

    const select = ref<SelectInstance>()
    const tree = ref<TreeInstance>()

    const key = computed(() => props.nodeKey || props.valueKey || 'value')

    const selectProps = useSelect(props, context, { select, tree, key })
    const { cacheOptions, ...treeProps } = useTree(props, context, {
      select,
      tree,
      key,
    })

    // 分组ID( syncCheckKey 值 ) -> 显示用 label 的映射
    const groupLabelMap = ref(new Map<any, string>())

    // 从 props.modelValue 构建（或补全）分组ID的 label，避免输入框出现空白
    const refreshGroupLabelsFromModel = () => {
      const syncField = props.syncCheckKey
      if (!syncField) return
      const labelField = (props.props as any)?.label || 'label'
      const childrenField = (props.props as any)?.children || 'children'

      // 规范化成数组（多选/单选皆可）
      const model = props.modelValue as any
      const values: any[] = Array.isArray(model)
        ? model
        : model != null
          ? [model]
          : []

      if (!values.length) return

      // 深度优先遍历树数据，找到每个分组ID对应的第一个可用 label
      const needed = new Set<any>(values.filter((v) => v != null))
      if (!needed.size) return

      const found = new Map<any, string>()

      const dfs = (nodes: any[]) => {
        if (!Array.isArray(nodes) || nodes.length === 0) return
        for (const n of nodes) {
          const g = n?.[syncField]
          if (g != null && needed.has(g) && !found.has(g)) {
            const lbl = n?.[labelField]
            if (lbl != null) {
              found.set(g, lbl)
              needed.delete(g)
              if (!needed.size) return // 全部找到即可提前返回
            }
          }
          const children = n?.[childrenField]
          if (children && children.length) {
            dfs(children)
            if (!needed.size) return
          }
        }
      }

      dfs(props.data as any[])

      if (found.size) {
        // 不覆盖已有的、可能由已勾选叶子带来的更精确 label
        const next = new Map(groupLabelMap.value)
        found.forEach((label, gid) => {
          if (!next.has(gid)) next.set(gid, label)
        })
        groupLabelMap.value = next
      }
    }

    // 合并基础缓存选项与“分组选项”，并为当前 v-model 补充占位选项，确保始终能显示 label
    // 注意：CacheOptions 期望的数据结构为 CacheOption({ value, currentLabel, isDisabled })
    const mergedCacheOptions = computed(() => {
      const base = (cacheOptions.value || []) as Array<{
        value: any
        currentLabel: any
        isDisabled: boolean
      }>

      // 将分组 label 映射转换为 CacheOption 结构
      const groups = Array.from(groupLabelMap.value.entries()).map(
        ([value, label]) => ({
          value,
          currentLabel: label,
          isDisabled: false,
        })
      )

      // 计算已有选项集合（避免重复）
      const existing = new Set<any>([
        ...base.map((o: any) => o?.value),
        ...groups.map((o: any) => o?.value),
      ])

      // 规范化当前 v-model 值
      const model = props.modelValue as any
      const values: any[] = Array.isArray(model)
        ? model
        : model != null
          ? [model]
          : []

      // 为当前选中的 value 追加兜底占位选项（优先使用 groupLabelMap 提供的 label）
      const fallbacks = values
        .filter((v) => !existing.has(v))
        .map((v) => ({
          value: v,
          currentLabel: groupLabelMap.value.get(v) ?? String(v),
          isDisabled: false,
        }))

      return base.concat(groups, fallbacks)
    })

    // 从已勾选的“叶子节点”提取分组的显示 label，用第一个命中的节点 label 作为代表
    const refreshGroupLabelsFromTree = () => {
      const syncField = props.syncCheckKey
      if (!syncField) return

      const labelField = (props.props as any)?.label || 'label'
      const checkedLeaves = (tree.value?.getCheckedNodes(true) as any[]) || []

      const next = new Map<any, string>()
      checkedLeaves.forEach((n) => {
        const g = n?.[syncField]
        if (g != null && !next.has(g)) {
          next.set(g, n?.[labelField] ?? String(g))
        }
      })
      groupLabelMap.value = next
    }

    // 当 modelValue 或 data 或 syncCheckKey 变化时，根据当前 v-model 值从完整数据源兜底补充 label
    // 注意：必须在函数定义之后再注册，并且不使用 immediate，避免在 setup 初始化阶段引用未定义的函数
    watch(
      () => [props.modelValue, props.data, props.syncCheckKey],
      () => {
        refreshGroupLabelsFromModel()
        // 当 modelValue 或数据变化后，等待 CacheOptions 注册后刷新已选显示
        Promise.resolve().then(() => {
          select.value?.setSelected()
        })
      },
      { deep: true }
    )

    // 关键增强：当合并后的缓存选项变更时，确保立即注册并刷新选中项的可见 label
    watch(
      () => mergedCacheOptions.value,
      () => {
        // 触发 CacheOptions 重新渲染并写入 select.states.cachedOptions
        // 然后强制刷新 Select 的已选项显示
        Promise.resolve().then(() => {
          select.value?.setSelected()
        })
      },
      { deep: true }
    )

    // 根据树的选中状态生成 v-model 的值：
    // - 未开启 syncCheckKey：返回已选节点的 nodeKey 列表
    // - 开启 syncCheckKey：同组仅返回分组ID（syncCheckKey 的值）；无分组节点返回自身 nodeKey
    const getModelValuesFromTree = () => {
      const nodeKeyField = key.value
      const syncField = props.syncCheckKey
      // 仅获取叶子节点，避免父节点被计入 v-model
      const checkedNodes = (tree.value?.getCheckedNodes(true) as any[]) || []

      if (!syncField) {
        return checkedNodes
          .map((n) => n?.[nodeKeyField])
          .filter((v) => v != null)
      }

      const result: any[] = []
      const groupSet = new Set<any>()
      checkedNodes.forEach((n) => {
        const g = n?.[syncField]
        if (g != null) {
          if (!groupSet.has(g)) {
            groupSet.add(g)
            result.push(g)
          }
        } else {
          const k = n?.[nodeKeyField]
          if (k != null) result.push(k)
        }
      })
      return result
    }

    const handleTreeCheck = () => {
      // 同步刷新“分组ID -> label”缓存，保证输入框中显示 label
      refreshGroupLabelsFromTree()
      // 进一步用 modelValue 兜底，防止懒加载或未展开导致 label 缺失
      refreshGroupLabelsFromModel()

      const values = getModelValuesFromTree()
      // 更新 tree-select 的 v-model
      context.emit('update:modelValue', values)
      // 触发 change 事件，保持与 ElSelect 的行为一致
      context.emit('change', values)

      // 在本轮事件结束后调用 setSelected，确保输入框立刻展示 label
      Promise.resolve().then(() => {
        select.value?.setSelected()
      })
    }

    // expose ElTree/ElSelect methods
    const methods = reactive({})
    expose(methods)
    onMounted(() => {
      Object.assign(methods, {
        //TODO: let only tree and select in 3.0
        ...pick(tree.value, [
          'filter',
          'updateKeyChildren',
          'getCheckedNodes',
          'setCheckedNodes',
          'getCheckedKeys',
          'setCheckedKeys',
          'setChecked',
          'getHalfCheckedNodes',
          'getHalfCheckedKeys',
          'getCurrentKey',
          'getCurrentNode',
          'setCurrentKey',
          'setCurrentNode',
          'getNode',
          'remove',
          'append',
          'insertBefore',
          'insertAfter',
        ]),
        ...pick(select.value, ['focus', 'blur', 'selectedLabel']),
        treeRef: tree.value,
        selectRef: select.value,
      })

      // 初始化一次分组 label 缓存，避免加载后初始值只显示分组ID
      refreshGroupLabelsFromTree()
      // 再用 modelValue 兜底一次，保证即使未展开树也能展示正确 label
      refreshGroupLabelsFromModel()

      // 兜底：确保在选项缓存注册完成后刷新 Select 的已选显示
      // 避免出现 v-model 先于 CacheOptions 注册导致的空标签
      Promise.resolve().then(() => {
        select.value?.setSelected()
      })
    })

    return () =>
      h(
        ElSelect,
        /**
         * 1. The `props` is processed into `Refs`, but `v-bind` and
         * render function props cannot read `Refs`, so use `reactive`
         * unwrap the `Refs` and keep reactive.
         * 2. The keyword `ref` requires `Ref`, but `reactive` broke it,
         * so use function.
         */
        reactive({
          ...selectProps,
          ref: (ref: SelectInstance) => (select.value = ref),
        }),
        {
          ...slots,
          default: () => [
            h(CacheOptions, { data: mergedCacheOptions.value }),
            h(
              ElTree,
              reactive({
                ...treeProps,
                syncCheckKey: props.syncCheckKey,
                // 在节点勾选时，生成并回写 v-model（分组ID/节点key）
                onCheck: handleTreeCheck,
                ref: (ref: TreeInstance) => (tree.value = ref),
              })
            ),
          ],
        }
      )
  },
})
</script>
