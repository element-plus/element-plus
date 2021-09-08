import { computed, ref, watch } from 'vue'
import { useCheck } from './useCheck'
import {
  NODE_CLICK,
  NODE_COLLAPSE,
  NODE_EXPAND,
  CURRENT_CHANGE,
} from '../emits'
import type {
  ITreeProps,
  TreeNodeData,
  TreeKey,
  TreeNode,
  TreeData,
  Tree,
} from '../tree.type'

export function useTree(props: ITreeProps, emit) {
  const expandedKeySet = ref<Set<TreeKey>>(new Set(props.defaultExpandedKeys))
  const currentKey = ref<TreeKey>(null)

  watch(
    () => props.currentNodeKey,
    (key) => {
      currentKey.value = key
    },
    {
      immediate: true,
    }
  )

  const tree = computed<Tree>(() => {
    const rawNodes = props.data
    const treeNodeMap: Map<TreeKey, TreeNode> = new Map()
    const levelTreeNodeMap: Map<number, TreeNode[]> = new Map()
    let maxLevel = 1
    // TODO using stack optimization?
    function traverse(
      nodes: TreeData,
      level = 1,
      parent: TreeNode | null = null
    ) {
      const siblings: TreeNode[] = []
      for (let index = 0; index < nodes.length; ++index) {
        const rawNode = nodes[index]
        const node: TreeNode = {}
        node.label = getLabel(rawNode)
        node.level = level
        node.parent = parent
        node.data = rawNode
        const value = getKey(rawNode)
        node.key = value
        const children = getChildren(rawNode)
        node.disabled = getDisabled(rawNode)
        node.isLeaf = !children || children.length === 0
        if (children && children.length) {
          node.children = traverse(children, level + 1, node)
        }
        siblings.push(node)
        treeNodeMap.set(value, node)
        if (!levelTreeNodeMap.has(level)) {
          levelTreeNodeMap.set(level, [])
        }
        levelTreeNodeMap.get(level).push(node)
      }
      if (level > maxLevel) {
        maxLevel = level
      }
      return siblings
    }
    const treeNodes: TreeNode[] = traverse(rawNodes)
    return {
      treeNodeMap,
      levelTreeNodeMap,
      treeNodes,
      maxLevel,
    }
  })

  const valueKey = computed(() => {
    return (props.props && props.props.value) || 'id'
  })
  const childrenKey = computed(() => {
    return (props.props && props.props.children) || 'children'
  })
  const disabledKey = computed(() => {
    return (props.props && props.props.disabled) || 'disabled'
  })
  const labelKey = computed(() => {
    return (props.props && props.props.label) || 'label'
  })

  const flattenTree = computed(() => {
    const expandedKeys = expandedKeySet.value
    const flattenNodes: TreeNode[] = []
    const nodes = tree.value.treeNodes || []
    function traverse() {
      const stack: TreeNode[] = []
      for (let i = nodes.length - 1; i >= 0; --i) {
        stack.push(nodes[i])
      }
      while (stack.length) {
        const node = stack.pop()
        flattenNodes.push(node)
        // Only "visible" nodes will be rendered
        if (expandedKeys.has(node.key)) {
          const children = node.children
          if (children) {
            const length = children.length
            for (let i = length - 1; i >= 0; --i) {
              stack.push(children[i])
            }
          }
        }
      }
    }
    traverse()
    return flattenNodes
  })

  const isNotEmpty = computed(() => {
    return flattenTree.value.length > 0
  })

  const {
    isIndeterminate,
    isChecked,
    toggleCheckbox,
    getCheckedKeys,
    getHalfCheckedKeys,
  } = useCheck(props, tree, emit)

  function getChildren(node: TreeNodeData): TreeNodeData[] {
    return node[childrenKey.value]
  }

  function getKey(node: TreeNodeData): TreeKey {
    if (!node) {
      return
    }
    return node[valueKey.value]
  }

  function getDisabled(node: TreeNodeData): boolean {
    return node[disabledKey.value]
  }

  function getLabel(node: TreeNodeData): string {
    return node[labelKey.value]
  }

  function toggleExpand(node: TreeNode) {
    const expandedKeys = expandedKeySet.value
    if (expandedKeys.has(node.key)) {
      collapse(node)
    } else {
      expand(node)
    }
  }

  function handleNodeClick(node: TreeNode) {
    emit(NODE_CLICK, node.data, node)
    handleCurrentChange(node)
    if (props.expandOnClickNode) {
      toggleExpand(node)
    }
    if (props.showCheckbox && props.checkOnClickNode && !node.disabled) {
      toggleCheckbox(node, !isChecked(node), true)
    }
  }

  function handleCurrentChange(node: TreeNode) {
    if (!isCurrent(node)) {
      currentKey.value = node.key
      emit(CURRENT_CHANGE, node.data, node)
    }
  }

  function handleNodeCheck(node: TreeNode, checked: boolean) {
    toggleCheckbox(node, checked)
  }

  function expand(node: TreeNode) {
    const keySet = expandedKeySet.value
    if (props.accordion) {
      // whether only one node among the same level can be expanded at one time
      const { treeNodeMap } = tree.value
      keySet.forEach((key) => {
        if (treeNodeMap.get(key).level === node.level) {
          keySet.delete(key)
        }
      })
    }
    keySet.add(node.key)
    emit(NODE_EXPAND, node.data, node)
  }

  function collapse(node: TreeNode) {
    expandedKeySet.value.delete(node.key)
    emit(NODE_COLLAPSE, node.data, node)
  }

  function isExpanded(node: TreeNode): boolean {
    return expandedKeySet.value.has(node.key)
  }

  function isDisabled(node: TreeNode): boolean {
    return node.disabled
  }

  function isCurrent(node: TreeNode): boolean {
    const current = currentKey.value
    return !!current && current === node.key
  }

  return {
    tree,
    flattenTree,
    isNotEmpty,
    getKey,
    getChildren,
    toggleExpand,
    toggleCheckbox,
    isExpanded,
    isChecked,
    isIndeterminate,
    isDisabled,
    isCurrent,
    handleNodeClick,
    handleNodeCheck,
    // expose
    getCheckedKeys,
    getHalfCheckedKeys,
  }
}
