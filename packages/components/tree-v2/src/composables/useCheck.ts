import { getCurrentInstance, nextTick, ref, watch } from 'vue'
import {
  NODE_CHECK,
  NODE_CHECK_CHANGE,
  SetOperationEnum,
} from '../virtual-tree'

import type { CheckboxValueType } from '@element-plus/components/checkbox'
import type { Ref } from 'vue'
import type {
  TreeV2,
  TreeV2Key,
  TreeV2Node,
  TreeV2NodeData,
  TreeV2Props,
} from '../types'

export function useCheck(props: TreeV2Props, tree: Ref<TreeV2 | undefined>) {
  const checkedKeys = ref<Set<TreeV2Key>>(new Set())
  const indeterminateKeys = ref<Set<TreeV2Key>>(new Set())
  const { emit } = getCurrentInstance()!

  watch(
    [() => tree.value, () => props.defaultCheckedKeys],
    () => {
      return nextTick(() => {
        _setCheckedKeys(props.defaultCheckedKeys)
      })
    },
    {
      immediate: true,
    }
  )

  const updateCheckedKeys = () => {
    if (!tree.value || !props.showCheckbox || props.checkStrictly) {
      return
    }
    const { levelTreeNodeMap, maxLevel } = tree.value
    const checkedKeySet = checkedKeys.value
    const indeterminateKeySet = new Set<TreeV2Key>()
    // It is easier to determine the indeterminate state by
    // traversing from bottom to top
    // leaf nodes not have indeterminate status and can be skipped
    for (let level = maxLevel - 1; level >= 1; --level) {
      const nodes = levelTreeNodeMap.get(level)
      if (!nodes) continue
      nodes.forEach((node) => {
        const children = node.children
        if (children) {
          // Whether all child nodes are selected
          let allChecked = true
          // Whether a child node is selected
          let hasChecked = false
          for (const childNode of children) {
            const key = childNode.key
            if (checkedKeySet.has(key)) {
              hasChecked = true
            } else if (indeterminateKeySet.has(key)) {
              allChecked = false
              hasChecked = true
              break
            } else {
              allChecked = false
            }
          }
          if (allChecked) {
            checkedKeySet.add(node.key)
          } else if (hasChecked) {
            indeterminateKeySet.add(node.key)
            checkedKeySet.delete(node.key)
          } else {
            checkedKeySet.delete(node.key)
            indeterminateKeySet.delete(node.key)
          }
        }
      })
    }
    indeterminateKeys.value = indeterminateKeySet
  }

  const isChecked = (node: TreeV2Node) => checkedKeys.value.has(node.key)

  const isIndeterminate = (node: TreeV2Node) =>
    indeterminateKeys.value.has(node.key)

  const toggleCheckbox = (
    node: TreeV2Node,
    isChecked: CheckboxValueType,
    nodeClick = true,
    immediateUpdate = true
  ) => {
    const checkedKeySet = checkedKeys.value
    const toggle = (node: TreeV2Node, checked: CheckboxValueType) => {
      checkedKeySet[checked ? SetOperationEnum.ADD : SetOperationEnum.DELETE](
        node.key
      )
      const children = node.children
      if (!props.checkStrictly && children) {
        children.forEach((childNode) => {
          if (!childNode.disabled) {
            toggle(childNode, checked)
          }
        })
      }
    }
    toggle(node, isChecked)
    if (immediateUpdate) {
      updateCheckedKeys()
    }
    if (nodeClick) {
      afterNodeCheck(node, isChecked)
    }
  }

  const afterNodeCheck = (node: TreeV2Node, checked: CheckboxValueType) => {
    const { checkedNodes, checkedKeys } = getChecked()
    const { halfCheckedNodes, halfCheckedKeys } = getHalfChecked()
    emit(NODE_CHECK, node.data, {
      checkedKeys,
      checkedNodes,
      halfCheckedKeys,
      halfCheckedNodes,
    })
    emit(NODE_CHECK_CHANGE, node.data, checked)
  }

  // expose
  function getCheckedKeys(leafOnly = false): TreeV2Key[] {
    return getChecked(leafOnly).checkedKeys
  }

  function getCheckedNodes(leafOnly = false): TreeV2NodeData[] {
    return getChecked(leafOnly).checkedNodes
  }

  function getHalfCheckedKeys(): TreeV2Key[] {
    return getHalfChecked().halfCheckedKeys
  }

  function getHalfCheckedNodes(): TreeV2NodeData[] {
    return getHalfChecked().halfCheckedNodes
  }

  function getChecked(leafOnly = false): {
    checkedKeys: TreeV2Key[]
    checkedNodes: TreeV2NodeData[]
  } {
    const checkedNodes: TreeV2NodeData[] = []
    const keys: TreeV2Key[] = []
    if (tree?.value && props.showCheckbox) {
      const { treeNodeMap } = tree.value
      checkedKeys.value.forEach((key) => {
        const node = treeNodeMap.get(key)
        if (node && (!leafOnly || (leafOnly && node.isLeaf))) {
          keys.push(key)
          checkedNodes.push(node.data)
        }
      })
    }
    return {
      checkedKeys: keys,
      checkedNodes,
    }
  }

  function getHalfChecked(): {
    halfCheckedKeys: TreeV2Key[]
    halfCheckedNodes: TreeV2NodeData[]
  } {
    const halfCheckedNodes: TreeV2NodeData[] = []
    const halfCheckedKeys: TreeV2Key[] = []
    if (tree?.value && props.showCheckbox) {
      const { treeNodeMap } = tree.value
      indeterminateKeys.value.forEach((key) => {
        const node = treeNodeMap.get(key)
        if (node) {
          halfCheckedKeys.push(key)
          halfCheckedNodes.push(node.data)
        }
      })
    }
    return {
      halfCheckedNodes,
      halfCheckedKeys,
    }
  }

  function setCheckedKeys(keys: TreeV2Key[]) {
    checkedKeys.value.clear()
    indeterminateKeys.value.clear()
    nextTick(() => {
      _setCheckedKeys(keys)
    })
  }

  function setChecked(key: TreeV2Key, isChecked: boolean) {
    if (tree?.value && props.showCheckbox) {
      const node = tree.value.treeNodeMap.get(key)
      if (node) {
        toggleCheckbox(node, isChecked, false)
      }
    }
  }

  function _setCheckedKeys(keys: TreeV2Key[]) {
    if (tree?.value) {
      const { treeNodeMap } = tree.value
      if (props.showCheckbox && treeNodeMap && keys?.length > 0) {
        for (const key of keys) {
          const node = treeNodeMap.get(key)
          if (node && !isChecked(node)) {
            toggleCheckbox(node, true, false, false)
          }
        }
        updateCheckedKeys()
      }
    }
  }

  return {
    updateCheckedKeys,
    toggleCheckbox,
    isChecked,
    isIndeterminate,
    // expose
    getCheckedKeys,
    getCheckedNodes,
    getHalfCheckedKeys,
    getHalfCheckedNodes,
    setChecked,
    setCheckedKeys,
  }
}
