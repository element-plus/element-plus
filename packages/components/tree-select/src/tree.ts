import { computed, nextTick, toRaw, toRefs, watch } from 'vue'
import { isEqual, pick } from 'lodash-unified'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isFunction } from '@element-plus/utils'
import ElTree from '@element-plus/components/tree'
import TreeSelectOption from './tree-select-option'
import type { Ref } from 'vue'
import type ElSelect from '@element-plus/components/select'
import type Node from '@element-plus/components/tree/src/model/node'
import type { TreeNodeData } from '@element-plus/components/tree/src/tree.type'

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
            !isEqual(
              treeInstance.getCheckedKeys(),
              toValidArray(props.modelValue)
            )
          ) {
            treeInstance.setCheckedKeys(toValidArray(props.modelValue))
          }
        })
      }
    },
    {
      immediate: true,
      deep: true,
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
    if (isFunction(propVal)) {
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

    // only expand on click node when the `check-strictly` is false
    expandOnClickNode: computed(() => {
      return !props.checkStrictly
    }),

    // auto expand selected parent node
    defaultExpandedKeys: computed(() => {
      const values = toValidArray(props.modelValue)
      const parentKeys = tree.value
        ? values
            .map((item) => tree.value?.getNode(item)?.parent?.key)
            .filter((item) => isValidValue(item))
        : values
      return props.defaultExpandedKeys
        ? props.defaultExpandedKeys.concat(parentKeys)
        : parentKeys
    }),

    renderContent: (h, { node, data, store }) => {
      return h(
        TreeSelectOption,
        {
          value: getNodeValByProp('value', data),
          label: getNodeValByProp('label', data),
          disabled: getNodeValByProp('disabled', data),
        },
        props.renderContent
          ? () => props.renderContent(h, { node, data, store })
          : slots.default
          ? () => slots.default({ node, data, store })
          : undefined
      )
    },
    filterNodeMethod: (value, data, node) => {
      if (props.filterNodeMethod)
        return props.filterNodeMethod(value, data, node)
      if (!value) return true
      return getNodeValByProp('label', data)?.includes(value)
    },
    onNodeClick: (data, node, e) => {
      attrs.onNodeClick?.(data, node, e)

      if (props.checkStrictly || node.isLeaf) {
        if (!getNodeValByProp('disabled', data)) {
          const value = getNodeValByProp('value', data)
          const option = select.value?.options.get(value)
          if (isFunction(select.value?.formatSelectionLabel)) {
            selectNode(select, value, node)
          }
          select.value?.handleOptionSelect(option, true)
        }
      } else {
        e.proxy.handleExpandIconClick()
      }
    },
    onCheck: (data, params) => {
      attrs.onCheck?.(data, params)
      // remove folder node when `checkStrictly` is false
      const checkedKeys = !props.checkStrictly
        ? tree.value?.getCheckedKeys(true)
        : params.checkedKeys

      const value = getNodeValByProp('value', data)

      if (isFunction(select.value?.formatSelectionLabel)) {
        selectNode(select, value, tree.value?.getNode(value))
      }

      emit(
        UPDATE_MODEL_EVENT,
        props.multiple
          ? checkedKeys
          : checkedKeys.includes(value)
          ? value
          : undefined
      )
    },
  }
}

function selectNode(
  select: Ref<InstanceType<typeof ElSelect> | undefined>,
  value: any,
  node: any
) {
  select.value?.treeSelection.set(value, node ? toRaw(node) : undefined)
}

function isValidValue(val: any) {
  return val || val === 0
}

function toValidArray(val: any) {
  return Array.isArray(val) ? val : isValidValue(val) ? [val] : []
}
