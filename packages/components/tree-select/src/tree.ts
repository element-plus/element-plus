import { computed, nextTick, toRefs, watch } from 'vue'
import { isEqual, pick, toArray } from 'lodash-unified'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import ElTree from '../../tree/src/tree.vue'
import TreeSelectOption from './tree-select-option'
import type ElSelect from '../../select/src/select.vue'
import type Node from '../../tree/src/model/node'
import type { TreeNodeData } from '../../tree/src/tree.type'
import type { Ref } from 'vue'

export const useTree = (
  props,
  { attrs, slots, emit },
  {
    select,
    tree,
    key,
  }: {
    select: Ref<InstanceType<typeof ElSelect> | undefined>
    tree: Ref<InstanceType<typeof ElTree> | undefined>
    key: Ref<string>
  }
) => {
  watch(
    () => props.modelValue,
    () => {
      if (props.showCheckbox) {
        nextTick(() => {
          const treeInstance = tree.value
          if (
            treeInstance &&
            !isEqual(treeInstance.getCheckedKeys(), toArray(props.modelValue))
          ) {
            treeInstance.setCheckedKeys(toArray(props.modelValue))
          }
        })
      }
    },
    {
      immediate: true,
    }
  )

  const propsMap = computed(() => ({
    value: key.value,
    ...props.props,
  }))

  const getNodeValByProp = (
    prop: 'value' | 'label' | 'children' | 'disabled' | 'isLeaf',
    data: TreeNodeData
  ) => {
    const propVal = propsMap.value[prop]
    if (propVal instanceof Function) {
      return propVal(
        data,
        tree.value?.getNode(getNodeValByProp('value', data)) as Node
      )
    } else {
      return data[propVal as string]
    }
  }

  return {
    ...pick(toRefs(props), Object.keys(ElTree.props)),
    ...attrs,
    nodeKey: key,
    defaultExpandedKeys: computed(() =>
      props.defaultExpandedKeys
        ? props.defaultExpandedKeys.concat(props.modelValue)
        : toArray(props.modelValue)
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
          : slots.default?.({ node, data, store })
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

      const value = getNodeValByProp('value', data)
      emit(
        UPDATE_MODEL_EVENT,
        props.multiple
          ? params.checkedKeys
          : params.checkedKeys.includes(value)
          ? value
          : undefined
      )
    },
  }
}
