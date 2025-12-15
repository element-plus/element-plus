<template>
  <div
    ref="el$"
    :class="[
      ns.b(),
      ns.is('dragging', !!dragState.draggingNode),
      ns.is('drop-not-allow', !dragState.allowDrop),
      ns.is('drop-inner', dragState.dropType === 'inner'),
      { [ns.m('highlight-current')]: highlightCurrent },
    ]"
    role="tree"
  >
    <el-tree-node
      v-for="child in root.childNodes"
      :key="getNodeKey(child)"
      :node="child"
      :props="props"
      :accordion="accordion"
      :render-after-expand="renderAfterExpand"
      :show-checkbox="showCheckbox"
      :render-content="renderContent"
      @node-expand="handleNodeExpand"
      @check="handleCheck"
    />
    <div v-if="isEmpty" :class="ns.e('empty-block')">
      <slot name="empty">
        <span :class="ns.e('empty-text')">
          {{ emptyText ?? t('el.tree.emptyText') }}
        </span>
      </slot>
    </div>
    <div
      v-show="dragState.showDropIndicator"
      ref="dropIndicator$"
      :class="ns.e('drop-indicator')"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  provide,
  ref,
  watch,
} from 'vue'
import { definePropType, iconPropType } from '@element-plus/utils'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { formItemContextKey } from '@element-plus/components/form'
import TreeStore from './model/tree-store'
import { getNodeKey as getNodeKeyUtil, handleCurrentChange } from './model/util'
import ElTreeNode from './tree-node.vue'
import { useNodeExpandEventBroadcast } from './model/useNodeExpandEventBroadcast'
import { useDragNodeHandler } from './model/useDragNode'
import { useKeydown } from './model/useKeydown'
import { ROOT_TREE_INJECTION_KEY } from './tokens'
import { isEqual } from 'lodash-unified'
import { treeEmits } from './tree'

import type Node from './model/node'
import type { ComponentInternalInstance, PropType, Ref } from 'vue'
import type {
  AllowDragFunction,
  AllowDropFunction,
  FilterValue,
  RenderContentFunction,
  TreeComponentProps,
  TreeData,
  TreeKey,
  TreeNodeData,
} from './tree.type'

export default defineComponent({
  name: 'ElTree',
  components: { ElTreeNode },
  props: {
    data: {
      type: definePropType<TreeData>(Array),
      default: () => [],
    },
    emptyText: {
      type: String,
    },
    renderAfterExpand: {
      type: Boolean,
      default: true,
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true,
    },
    checkOnClickNode: Boolean,
    checkOnClickLeaf: {
      type: Boolean,
      default: true,
    },
    checkDescendants: Boolean,
    autoExpandParent: {
      type: Boolean,
      default: true,
    },
    defaultCheckedKeys: Array as PropType<
      TreeComponentProps['defaultCheckedKeys']
    >,
    defaultExpandedKeys: Array as PropType<
      TreeComponentProps['defaultExpandedKeys']
    >,
    currentNodeKey: [String, Number] as PropType<string | number>,
    renderContent: {
      type: definePropType<RenderContentFunction>(Function),
    },
    showCheckbox: Boolean,
    draggable: Boolean,
    allowDrag: {
      type: definePropType<AllowDragFunction>(Function),
    },
    allowDrop: {
      type: definePropType<AllowDropFunction>(Function),
    },
    props: {
      type: Object as PropType<TreeComponentProps['props']>,
      default: () => ({
        children: 'children',
        label: 'label',
        disabled: 'disabled',
      }),
    },
    lazy: Boolean,
    highlightCurrent: Boolean,
    load: Function as PropType<TreeComponentProps['load']>,
    filterNodeMethod: Function as PropType<
      TreeComponentProps['filterNodeMethod']
    >,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18,
    },
    icon: {
      type: iconPropType,
    },
    syncCheckKey: {
      type: String,
      default: '',
    },
  },
  emits: treeEmits,
  setup(props, ctx) {
    const { t } = useLocale()
    const ns = useNamespace('tree')

    const store = ref<TreeStore>(
      new TreeStore({
        key: props.nodeKey,
        data: props.data,
        lazy: props.lazy,
        props: props.props,
        load: props.load,
        currentNodeKey: props.currentNodeKey,
        checkStrictly: props.checkStrictly,
        checkDescendants: props.checkDescendants,
        defaultCheckedKeys: props.defaultCheckedKeys,
        defaultExpandedKeys: props.defaultExpandedKeys,
        autoExpandParent: props.autoExpandParent,
        defaultExpandAll: props.defaultExpandAll,
        filterNodeMethod: props.filterNodeMethod,
      })
    )

    store.value.initialize()
    //  防止循环触发的标志
    const isSyncing = ref(false)
    //  记录每个同步分组(syncCheckKey)“第一次被勾选”的代表 key
    const firstPickedKeyByGroup = ref(new Map<any, any>())
    const root = ref<Node>(store.value.root)
    const currentNode = ref<Node | null>(null)
    const el$: Ref<HTMLElement | null> = ref(null)
    const dropIndicator$: Ref<HTMLElement | null> = ref(null)

    const { broadcastExpanded } = useNodeExpandEventBroadcast(props)

    const { dragState } = useDragNodeHandler({
      props,
      ctx,
      el$,
      dropIndicator$,
      store,
    })

    useKeydown({ el$ }, store)

    const instance = getCurrentInstance()

    const isSelectTree = computed(() => {
      let parent = instance?.parent
      while (parent) {
        if (parent.type.name === 'ElTreeSelect') {
          return true
        }
        parent = parent.parent
      }
      return false
    })

    const isEmpty = computed(() => {
      const { childNodes } = root.value
      return (
        (!childNodes ||
          childNodes.length === 0 ||
          childNodes.every(({ visible }) => !visible)) &&
        !isSelectTree.value
      )
    })

    watch(
      () => props.currentNodeKey,
      (newVal) => {
        store.value.setCurrentNodeKey(newVal ?? null)
      }
    )

    watch(
      () => props.defaultCheckedKeys,
      (newVal, oldVal) => {
        if (isEqual(newVal, oldVal)) return

        store.value.setDefaultCheckedKey(newVal ?? [])
      }
    )

    watch(
      () => props.defaultExpandedKeys,
      (newVal) => {
        store.value.setDefaultExpandedKeys(newVal ?? [])
      }
    )

    watch(
      () => props.data,
      (newVal) => {
        store.value.setData(newVal)
      },
      { deep: true }
    )

    watch(
      () => props.checkStrictly,
      (newVal) => {
        store.value.checkStrictly = newVal
      }
    )

    const filter = (value: FilterValue) => {
      if (!props.filterNodeMethod)
        throw new Error('[Tree] filterNodeMethod is required when filter')
      store.value.filter(value)
    }

    const getNodeKey = (node: Node) => {
      return getNodeKeyUtil(props.nodeKey, node.data)
    }

    const requireNodeKey = (methodName: string) => {
      if (!props.nodeKey) {
        throw new Error(`[Tree] nodeKey is required in ${methodName}`)
      }
    }

    const getNodePath = (data: TreeKey | TreeNodeData) => {
      requireNodeKey('getNodePath')

      const node = store.value.getNode(data)
      if (!node) return []
      const path = [node.data]
      let parent = node.parent
      while (parent && parent !== root.value) {
        path.push(parent.data)
        parent = parent.parent
      }
      return path.reverse()
    }

    const getCheckedNodes = (
      leafOnly?: boolean,
      includeHalfChecked?: boolean
    ): TreeNodeData[] => {
      // 保持原始行为：返回实际被勾选的节点数据列表（按节点）
      return store.value.getCheckedNodes(leafOnly, includeHalfChecked)
    }

    const getCheckedKeys = (leafOnly?: boolean): TreeKey[] => {
      const rawKeys = store.value.getCheckedKeys(leafOnly)
      // 未启用 syncCheckKey：保持原行为
      if (!props.syncCheckKey) return rawKeys

      const syncKey = props.syncCheckKey

      // 构建“分组ID -> 已选节点key列表”和“无分组节点key列表”
      const groupKeys = new Map<any, TreeKey[]>()
      const keysWithoutGroup: TreeKey[] = []

      rawKeys.forEach((k: any) => {
        const data = store.value.getNode(k)?.data
        const g = data?.[syncKey]
        if (g == null) {
          keysWithoutGroup.push(k)
        } else {
          if (!groupKeys.has(g)) groupKeys.set(g, [])
          groupKeys.get(g)!.push(k)
        }
      })

      // 输出规则：
      // - 有 sync 分组的节点：对外仅输出该分组的 syncKey 值（每组一个），确保 v-model 去重且为分组ID
      // - 无分组字段的节点：原样输出其节点 key
      const result: (TreeKey | string)[] = [...keysWithoutGroup]
      groupKeys.forEach((_keys, g) => {
        // 该分组存在至少一个已选节点，则输出分组ID g
        result.push(g as string)
      })

      return result as TreeKey[]
    }

    const getCurrentNode = () => {
      const currentNode = store.value.getCurrentNode()
      return currentNode ? currentNode.data : null
    }

    const getCurrentKey = (): TreeKey | null => {
      requireNodeKey('getCurrentKey')

      const currentNode = getCurrentNode()
      return currentNode ? currentNode[props.nodeKey!] : null
    }

    const setCheckedNodes = (nodes: Node[], leafOnly?: boolean) => {
      requireNodeKey('setCheckedNodes')

      store.value.setCheckedNodes(nodes, leafOnly)
    }

    const setCheckedKeys = (keys: TreeKey[], leafOnly?: boolean) => {
      requireNodeKey('setCheckedKeys')

      // 未开启 syncCheckKey：保持原有行为
      if (!props.syncCheckKey) {
        store.value.setCheckedKeys(keys, leafOnly)
        return
      }

      // 开启 syncCheckKey：支持外部通过 v-model 传入“分组ID（syncCheckKey 值）”或“节点 nodeKey”
      const nodeKeyField = props.nodeKey || 'value'
      const groupKeyField = props.syncCheckKey

      // 1) 清空当前所有勾选，准备按 keys 重建
      store.value.setCheckedKeys([], leafOnly)
      firstPickedKeyByGroup.value.clear()

      const allNodes = store.value._getAllNodes()

      // 2) 对每个 key：
      // - 若能命中节点：按该节点所属分组全量勾选；若无分组只勾选自身
      // - 若不能命中节点：视为“分组ID”，按该分组全量勾选
      keys.forEach((k: any) => {
        const node = store.value.getNode(k)
        if (node) {
          const data = node.data || {}
          const g = data[groupKeyField]
          if (g != null) {
            // 记录该分组首次代表（用于稳定对外 getCheckedKeys/getCheckedNodes 的代表选择）
            if (!firstPickedKeyByGroup.value.has(g)) {
              firstPickedKeyByGroup.value.set(g, data[nodeKeyField])
            }
            // 勾选该分组全部节点
            allNodes.forEach((n: any) => {
              if (n.data?.[groupKeyField] === g) {
                n.setChecked(true, false)
              }
            })
          } else {
            // 无分组：只勾选自身
            node.setChecked(true, false)
          }
        } else {
          // 视作“分组ID”
          const g = k
          let repSet = false
          allNodes.forEach((n: any) => {
            if (n.data?.[groupKeyField] === g) {
              n.setChecked(true, false)
              if (!repSet) {
                // 为该分组设置一个代表 nodeKey（用于稳定输出）
                firstPickedKeyByGroup.value.set(g, n.data?.[nodeKeyField])
                repSet = true
              }
            }
          })
        }
      })
    }

    const setChecked = (
      data: TreeKey | TreeNodeData,
      checked: boolean,
      deep: boolean
    ) => {
      store.value.setChecked(data, checked, deep)
    }

    const getHalfCheckedNodes = (): TreeNodeData[] => {
      return store.value.getHalfCheckedNodes()
    }

    const getHalfCheckedKeys = (): TreeKey[] => {
      return store.value.getHalfCheckedKeys()
    }

    const setCurrentNode = (node: Node, shouldAutoExpandParent = true) => {
      requireNodeKey('setCurrentNode')

      handleCurrentChange(store, ctx.emit, () => {
        broadcastExpanded(node)
        store.value.setUserCurrentNode(node, shouldAutoExpandParent)
      })
    }

    const setCurrentKey = (
      key: TreeKey | null = null,
      shouldAutoExpandParent = true
    ) => {
      requireNodeKey('setCurrentKey')

      handleCurrentChange(store, ctx.emit, () => {
        broadcastExpanded()
        store.value.setCurrentNodeKey(key, shouldAutoExpandParent)
      })
    }

    const getNode = (data: TreeKey | TreeNodeData): Node => {
      return store.value.getNode(data)
    }

    const remove = (data: TreeNodeData | Node) => {
      store.value.remove(data)
    }

    const append = (
      data: TreeNodeData,
      parentNode: TreeNodeData | TreeKey | Node
    ) => {
      store.value.append(data, parentNode)
    }

    const insertBefore = (
      data: TreeNodeData,
      refNode: TreeKey | TreeNodeData | Node
    ) => {
      store.value.insertBefore(data, refNode)
    }

    const insertAfter = (
      data: TreeNodeData,
      refNode: TreeKey | TreeNodeData | Node
    ) => {
      store.value.insertAfter(data, refNode)
    }

    const handleNodeExpand = (
      nodeData: TreeNodeData,
      node: Node,
      instance: ComponentInternalInstance
    ) => {
      broadcastExpanded(node)
      ctx.emit('node-expand', nodeData, node, instance)
    }

    const updateKeyChildren = (key: TreeKey, data: TreeData) => {
      requireNodeKey('updateKeyChild')

      store.value.updateChildren(key, data)
    }
    const handleCheck = (data: any, checkInfo: any) => {
      console.log('=== handleCheck 被触发 ===', data, checkInfo) // 调试日志

      // 若无同步键或正在同步，直接对外发出当前事件并返回
      if (!props.syncCheckKey || isSyncing.value) {
        ctx.emit('check', data, checkInfo)
        return
      }

      const nodeKey = props.nodeKey || 'value'
      const dataKey = data[nodeKey]
      const syncValue = data[props.syncCheckKey]

      // 当前节点没有同步字段，直接透传事件
      if (!syncValue) {
        ctx.emit('check', data, checkInfo)
        return
      }

      isSyncing.value = true
      try {
        // 使用 Store 的当前状态来判定是否勾选，避免中间态导致判断不准
        const isChecked = store.value.getNode(dataKey)?.checked === true

        // 维护“首次勾选代表”：若该分组尚无代表且当前为勾选，则将当前节点设为代表；
        // 若当前取消且恰好是该分组代表，则移除代表（后续读取时按遍历顺序回退）
        if (isChecked) {
          if (!firstPickedKeyByGroup.value.has(syncValue)) {
            firstPickedKeyByGroup.value.set(syncValue, dataKey)
          }
        } else {
          if (firstPickedKeyByGroup.value.get(syncValue) === dataKey) {
            firstPickedKeyByGroup.value.delete(syncValue)
          }
        }

        // 遍历所有节点，找到 syncCheckKey 相同但 key 不同的节点，设置为相同勾选状态
        const allNodes = store.value._getAllNodes()
        allNodes.forEach((node: any) => {
          const nodeDataKey = node.data?.[nodeKey]
          if (
            node.data?.[props.syncCheckKey] === syncValue &&
            nodeDataKey !== dataKey
          ) {
            // 同步时保持与“非严格模式”的一致联动策略：当 checkStrictly=false 时允许向下联动
            node.setChecked(isChecked, !store.value.checkStrictly)
          }
        })

        // 同步完成后，对外透传原始节点级别的勾选信息（不做去重转换）
        ctx.emit('check', data, {
          checkedNodes: store.value.getCheckedNodes(),
          checkedKeys: store.value.getCheckedKeys(),
          halfCheckedNodes: store.value.getHalfCheckedNodes(),
          halfCheckedKeys: store.value.getHalfCheckedKeys(),
        })
      } finally {
        isSyncing.value = false
      }
    }

    provide(ROOT_TREE_INJECTION_KEY, {
      ctx,
      props,
      store,
      root,
      currentNode,
      instance,
    })

    provide(formItemContextKey, undefined)

    return {
      ns,
      // ref
      store,
      root,
      currentNode,
      dragState,
      el$,
      dropIndicator$,

      // computed
      isEmpty,

      // methods
      filter,
      getNodeKey,
      getNodePath,
      getCheckedNodes,
      getCheckedKeys,
      getCurrentNode,
      getCurrentKey,
      setCheckedNodes,
      setCheckedKeys,
      setChecked,
      getHalfCheckedNodes,
      getHalfCheckedKeys,
      setCurrentNode,
      setCurrentKey,
      t,
      getNode,
      remove,
      append,
      insertBefore,
      insertAfter,
      handleNodeExpand,
      updateKeyChildren,
      handleCheck,
    }
  },
})
</script>
