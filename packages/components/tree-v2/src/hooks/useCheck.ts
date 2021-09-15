import { ref, watch } from 'vue'
import { NODE_CLICK, NODE_CHECK_CHANGE } from '../emits'
import type { Ref } from 'vue'
import type { ITreeProps, TreeKey, TreeNode, Tree } from '../tree.type'

const DELETE = 'delete'
const ADD = 'add'

export function useCheck(props: ITreeProps, tree: Ref<Tree>, emit) {
  const checkedKeys = ref<Set<TreeKey>>(new Set())
  const indeterminateKeys = ref<Set<TreeKey>>(new Set())

  const updateCheckedKeys = () => {
    if (!props.showCheckbox || props.checkStrictly) {
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
      nodes.forEach((node) => {
        const children = node.children
        if (children) {
          // Whether all child nodes are selected
          let allChecked = true
          // Whether a child node is selected
          let hasChecked = false
          for (let i = 0; i < children.length; ++i) {
            const childNode = children[i]
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
    isChecked: boolean,
    nodeClick = true
  ) => {
    const checkedKeySet = checkedKeys.value
    const toggle = (node: TreeNode, checked: boolean) => {
      checkedKeySet[checked ? ADD : DELETE](node.key)
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
    updateCheckedKeys()
    if (nodeClick) {
      afterNodeCheck(node, isChecked)
    }
  }

  function getCheckedKeys(leafOnly = false): TreeKey[] {
    if (props.showCheckbox) {
      const { treeNodeMap } = tree.value
      const allCheckedKeys = Array.from(checkedKeys.value)
      const keys = []
      allCheckedKeys.forEach((key) => {
        const node = treeNodeMap.get(key)
        if (node && (!leafOnly || (leafOnly && node.isLeaf))) {
          keys.push(key)
        }
      })
      return keys
    }
    return []
  }

  function getHalfCheckedKeys(): TreeKey[] {
    if (props.showCheckbox) {
      return Array.from(indeterminateKeys.value)
    }
    return []
  }

  const afterNodeCheck = (node: TreeNode, checked: boolean) => {
    const { treeNodeMap } = tree.value
    const halfCheckedNodes = new Array<TreeNode>()
    const checkedNodes = new Array<TreeNode>()
    const allCheckedKeys = Array.from(checkedKeys.value)
    const halfCheckedKeys = Array.from(indeterminateKeys.value)
    allCheckedKeys.forEach((key) => {
      const node = treeNodeMap.get(key)
      if (node) {
        checkedNodes.push(node.data)
      }
    })
    halfCheckedKeys.forEach((key) => {
      const node = treeNodeMap.get(key)
      if (node) {
        halfCheckedNodes.push(node.data)
      }
    })
    emit(NODE_CLICK, node.data, {
      checkedKeys: allCheckedKeys,
      checkedNodes,
      halfCheckedKeys,
      halfCheckedNodes,
    })
    emit(NODE_CHECK_CHANGE, node.data, checked)
  }

  watch(
    () => tree.value,
    (tree) => {
      if (props.showCheckbox && tree) {
        const { treeNodeMap } = tree
        for (let i = 0; i < props.defaultCheckedKeys.length; ++i) {
          const key = props.defaultCheckedKeys[i]
          const node = treeNodeMap.get(key)
          if (node && !isChecked(node)) {
            toggleCheckbox(node, true, false)
          }
        }
      }
    },
    {
      immediate: true,
    }
  )

  return {
    updateCheckedKeys,
    toggleCheckbox,
    isChecked,
    isIndeterminate,
    // expose
    getCheckedKeys,
    getHalfCheckedKeys,
  }
}
