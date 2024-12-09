import { getCurrentInstance, nextTick, ref, watch } from 'vue'
import {
  NODE_CHECK,
  NODE_CHECK_CHANGE,
  SetOperationEnum,
} from '../virtual-tree'
import type { CheckboxValueType } from '@element-plus/components/checkbox'
import type { Ref } from 'vue'
import type { Tree, TreeKey, TreeNode, TreeNodeData, TreeProps } from '../types'

export function useCheck(props: TreeProps, tree: Ref<Tree | undefined>) {
  const checkedKeys = ref<Set<TreeKey>>(new Set())
  const indeterminateKeys = ref<Set<TreeKey>>(new Set())
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
    const indeterminateKeySet = new Set<TreeKey>()
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

  const isChecked = (node: TreeNode) => checkedKeys.value.has(node.key)

  const isIndeterminate = (node: TreeNode) =>
    indeterminateKeys.value.has(node.key)

  const toggleCheckbox = (
    node: TreeNode,
    isChecked: CheckboxValueType,
    nodeClick = true,
    immediateUpdate = true
  ) => {
    const checkedKeySet = checkedKeys.value
    const toggle = (node: TreeNode, checked: CheckboxValueType) => {
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

  const afterNodeCheck = (node: TreeNode, checked: CheckboxValueType) => {
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
  function getCheckedKeys(leafOnly = false): TreeKey[] {
    return getChecked(leafOnly).checkedKeys
  }

  function getCheckedNodes(leafOnly = false): TreeNodeData[] {
    return getChecked(leafOnly).checkedNodes
  }

  function getHalfCheckedKeys(): TreeKey[] {
    return getHalfChecked().halfCheckedKeys
  }

  function getHalfCheckedNodes(): TreeNodeData[] {
    return getHalfChecked().halfCheckedNodes
  }

  function getChecked(leafOnly = false): {
    checkedKeys: TreeKey[]
    checkedNodes: TreeNodeData[]
  } {
    const checkedNodes: TreeNodeData[] = []
    const keys: TreeKey[] = []
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
    halfCheckedKeys: TreeKey[]
    halfCheckedNodes: TreeNodeData[]
  } {
    const halfCheckedNodes: TreeNodeData[] = []
    const halfCheckedKeys: TreeKey[] = []
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

  function setCheckedKeys(keys: TreeKey[]) {
    checkedKeys.value.clear()
    indeterminateKeys.value.clear()
    nextTick(() => {
      _setCheckedKeys(keys)
    })
  }

  function setChecked(key: TreeKey, isChecked: boolean) {
    if (tree?.value && props.showCheckbox) {
      const node = tree.value.treeNodeMap.get(key)
      if (node) {
        toggleCheckbox(node, isChecked, false)
      }
    }
  }

  function _setCheckedKeys(keys: TreeKey[]) {
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
