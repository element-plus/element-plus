// @ts-nocheck
import { computed, nextTick, toRefs, watch } from 'vue'
import { isEqual, pick } from 'lodash-unified'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isFunction } from '@element-plus/utils'
import ElTree from '@element-plus/components/tree'
import TreeSelectOption from './tree-select-option'
import { isValidArray, isValidValue, toValidArray, treeFind } from './utils'
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

  const defaultExpandedParentKeys = toValidArray(props.modelValue)
    .map((value) => {
      return treeFind(
        props.data || [],
        (data) => getNodeValByProp('value', data) === value,
        (data) => getNodeValByProp('children', data),
        (data, index, array, parent) =>
          parent && getNodeValByProp('value', parent)
      )
    })
    .filter((item) => isValidValue(item))

  return {
    ...pick(toRefs(props), Object.keys(ElTree.props)),
    ...attrs,
    nodeKey: key,

    // only expand on click node when the `check-strictly` is false
    expandOnClickNode: computed(() => {
      return !props.checkStrictly && props.expandOnClickNode
    }),

    // show current selected node only first time,
    // fix the problem of expanding multiple nodes when checking multiple nodes
    defaultExpandedKeys: computed(() => {
      return props.defaultExpandedKeys
        ? props.defaultExpandedKeys.concat(defaultExpandedParentKeys)
        : defaultExpandedParentKeys
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

      // `onCheck` is trigger when `checkOnClickNode`
      if (props.showCheckbox && props.checkOnClickNode) return

      // now `checkOnClickNode` is false, only no checkbox and `checkStrictly` or `isLeaf`
      if (!props.showCheckbox && (props.checkStrictly || node.isLeaf)) {
        if (!getNodeValByProp('disabled', data)) {
          const option = select.value?.options.get(
            getNodeValByProp('value', data)
          )
          select.value?.handleOptionSelect(option, true)
        }
      } else if (props.expandOnClickNode) {
        e.proxy.handleExpandIconClick()
      }
    },
    onCheck: (data, params) => {
      attrs.onCheck?.(data, params)

      const dataValue = getNodeValByProp('value', data)
      if (props.checkStrictly) {
        emit(
          UPDATE_MODEL_EVENT,
          // Checking for changes may come from `check-on-node-click`
          props.multiple
            ? params.checkedKeys
            : params.checkedKeys.includes(dataValue)
            ? dataValue
            : undefined
        )
      }
      // only can select leaf node
      else {
        if (props.multiple) {
          emit(
            UPDATE_MODEL_EVENT,
            (tree.value as InstanceType<typeof ElTree>).getCheckedKeys(true)
          )
        } else {
          // select first leaf node when check parent
          const firstLeaf = treeFind(
            [data],
            (data) =>
              !isValidArray(getNodeValByProp('children', data)) &&
              !getNodeValByProp('disabled', data),
            (data) => getNodeValByProp('children', data)
          )
          const firstLeafKey = firstLeaf
            ? getNodeValByProp('value', firstLeaf)
            : undefined

          // unselect when any child checked
          const hasCheckedChild =
            isValidValue(props.modelValue) &&
            !!treeFind(
              [data],
              (data) => getNodeValByProp('value', data) === props.modelValue,
              (data) => getNodeValByProp('children', data)
            )

          emit(
            UPDATE_MODEL_EVENT,
            firstLeafKey === props.modelValue || hasCheckedChild
              ? undefined
              : firstLeafKey
          )
        }
      }
    },
  }
}
