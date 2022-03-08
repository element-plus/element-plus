<template>
  <el-select
    ref="select"
    class="el-tree-select"
    v-bind="bindingsSelect"
    :popper-class="
      'el-tree-select__popper' +
      (bindingsSelect.popperClass ? ` ${bindingsSelect.popperClass}` : '')
    "
    :model-value="modelValue"
    @update:model-value="handleChange"
  >
    <template #prefix>
      <slot name="prefix"></slot>
    </template>
    <template #empty>
      <slot name="empty"></slot>
    </template>
    <el-tree ref="tree" v-bind="bindingsTree"></el-tree>
  </el-select>
</template>
<script lang="ts">
import { defineComponent, ref, watch, nextTick, computed } from 'vue'
import { toArray, isEqual } from 'lodash-unified'
import ElSelect from '@element-plus/components/select/src/select.vue'
import ElTree from '@element-plus/components/tree/src/tree.vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useSelect } from './select'
import { useTree } from './tree'
import TreeSelectOption from './tree-select-option'
import { extractRefObj } from './utils'
import type { TreeNodeData } from '../../tree/src/tree.type'
import type Node from '../../tree/src/model/node'

export default defineComponent({
  name: 'ElTreeSelect',
  components: {
    ElSelect,
    ElTree,
  },
  props: {
    ...ElSelect.props,
    ...ElTree.props,
  },
  setup(props, { emit, attrs, slots }) {
    const select = ref<InstanceType<typeof ElSelect>>()
    const tree = ref<InstanceType<typeof ElTree>>()

    const values = computed(() => toArray(props.modelValue))

    watch(
      () => props.modelValue,
      () => {
        if (props.showCheckbox) {
          nextTick(() => {
            const treeInstance = tree.value
            if (
              treeInstance &&
              !isEqual(treeInstance.getCheckedKeys(), values.value)
            ) {
              treeInstance.setCheckedKeys(values.value)
            }
          })
        }
      }
    )

    const valueKey = props.valueKey.value || 'value'
    const nodeKey = valueKey

    const propsMap = {
      value: valueKey,
      ...props.props,
    }

    const handleChange = (val) => {
      emit(UPDATE_MODEL_EVENT, val)
    }

    const getNodeValByProp = (
      prop: 'value' | 'label' | 'children' | 'disabled' | 'isLeaf',
      data: TreeNodeData
    ) => {
      const propVal = propsMap[prop]
      if (propVal instanceof Function) {
        return propVal(
          data,
          tree.value?.getNode(getNodeValByProp('value', data)) as Node
        )
      } else {
        return data[propVal as string]
      }
    }

    const { props: propsSelect, listeners: listenersSelect } = useSelect(
      props,
      attrs,
      select
    )
    const { props: propsTree, listeners: listenersTree } = useTree(
      props,
      attrs,
      tree
    )

    // Override ElTree props, methods and listeners
    const selectOverride = {
      valueKey,
      filterMethod: (keyword = '') => {
        tree.value?.filter(keyword)
      },
      // clear filter text when visible change
      onVisibleChange: (visible: boolean) => {
        ;(attrs.onVisibleChange as (visible: boolean) => void)?.(visible)

        if (props.filterable && !visible) {
          setTimeout(() => {
            selectOverride.filterMethod()
          }, 230)
        }
      },
    }

    // Override ElTree props, methods and listeners
    const treeOverride = {
      nodeKey,
      defaultExpandedKeys: computed(() =>
        props.defaultExpandedKeys
          ? props.defaultExpandedKeys.concat(values.value)
          : values.value
      ),
      renderContent: (h, { node, data, store }) => {
        return h(
          TreeSelectOption,
          {
            value: getNodeValByProp('value', data),
            label: getNodeValByProp('label', data),
            disabled: getNodeValByProp('disabled', data),
          },
          props.renderContent
            ? [props.renderContent(h, { node, data, store })]
            : slots.option?.({ node, data, store })
        )
      },
      filterNodeMethod: (value, data, node) => {
        if (props.filterMethod) return props.filterMethod(value, data, node)
        if (!value) return true
        return getNodeValByProp('label', data)?.includes(value)
      },
      onNodeClick: (data, node, e) => {
        if (props.checkStrictly || node.isLeaf) {
          if (!getNodeValByProp('disabled', data)) {
            const option = select.value?.options.get(
              getNodeValByProp('value', data)
            )
            select.value?.handleOptionSelect(option, true)
          }
        } else {
          e.ctx.handleExpandIconClick()
        }
      },
      onCheck: (data, params) => {
        ;(attrs['onCheck'] as (...args: any[]) => any)?.(data, params)

        const { checkedKeys, checkedNodes } = params

        // remove folder node when `checkStrictly` is false
        // if (!props.checkStrictly) {
        //   checkedKeys = checkedNodes
        //     .filter((item) => {
        //       const children = getNodeValByProp('children', item)
        //       return children && children.length
        //     })
        //     .map((item) => getNodeValByProp('value', item))
        // }

        const value = getNodeValByProp('value', data)
        handleChange(
          props.multiple
            ? checkedKeys
            : checkedKeys.includes(value)
            ? value
            : undefined
        )
      },
    }

    const bindingsSelect = computed(() =>
      extractRefObj({
        ...propsSelect,
        ...listenersSelect,
        ...selectOverride,
      })
    )

    const bindingsTree = computed(() =>
      extractRefObj({
        ...propsTree,
        ...listenersTree,
        ...treeOverride,
      })
    )

    return {
      select,
      tree,

      // ElSelect/ElTree: props, listeners
      bindingsSelect,
      bindingsTree,

      // ElTreeSelect: private methods
      handleChange,
    }
  },
})
</script>
<style></style>
