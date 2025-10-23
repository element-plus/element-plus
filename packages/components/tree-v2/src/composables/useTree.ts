import { computed, ref, shallowRef, watch } from 'vue'
import { isObject } from '@element-plus/utils'
import {
  CURRENT_CHANGE,
  NODE_CLICK,
  NODE_COLLAPSE,
  NODE_DROP,
  NODE_EXPAND,
  TreeV2OptionsEnum,
} from '../virtual-tree'
import { useCheck } from './useCheck'
import { useFilter } from './useFilter'

import type {
  FixedSizeList,
  Alignment as ScrollStrategy,
} from '@element-plus/components/virtual-list'
import type { SetupContext } from 'vue'
import type { treeEmits } from '../virtual-tree'
import type { CheckboxValueType } from '@element-plus/components/checkbox'
import type {
  TreeV2,
  TreeV2Data,
  TreeV2Key,
  TreeV2Node,
  TreeV2NodeData,
  TreeV2Props,
} from '../types'

export function useTree(
  props: TreeV2Props,
  emit: SetupContext<typeof treeEmits>['emit']
) {
  const expandedKeySet = ref<Set<TreeV2Key>>(new Set())
  const currentKey = ref<TreeV2Key | undefined>()
  const tree = shallowRef<TreeV2 | undefined>()
  const listRef = ref<typeof FixedSizeList | undefined>()

  const {
    isIndeterminate,
    isChecked,
    toggleCheckbox,
    getCheckedKeys,
    getCheckedNodes,
    getHalfCheckedKeys,
    getHalfCheckedNodes,
    setChecked,
    setCheckedKeys,
  } = useCheck(props, tree)

  const { doFilter, hiddenNodeKeySet, isForceHiddenExpandIcon } = useFilter(
    props,
    tree
  )

  const valueKey = computed(() => {
    return props.props?.value || TreeV2OptionsEnum.KEY
  })
  const childrenKey = computed(() => {
    return props.props?.children || TreeV2OptionsEnum.CHILDREN
  })
  const disabledKey = computed(() => {
    return props.props?.disabled || TreeV2OptionsEnum.DISABLED
  })
  const labelKey = computed(() => {
    return props.props?.label || TreeV2OptionsEnum.LABEL
  })

  const flattenTree = computed(() => {
    const expandedKeys = expandedKeySet.value
    const hiddenKeys = hiddenNodeKeySet.value
    const flattenNodes: TreeV2Node[] = []
    const nodes = tree.value?.treeNodes || []

    const stack: TreeV2Node[] = []
    for (let i = nodes.length - 1; i >= 0; --i) {
      stack.push(nodes[i])
    }
    while (stack.length) {
      const node = stack.pop()!
      if (hiddenKeys.has(node.key)) continue

      flattenNodes.push(node)
      if (node.children && expandedKeys.has(node.key)) {
        for (let i = node.children.length - 1; i >= 0; --i) {
          stack.push(node.children[i])
        }
      }
    }

    return flattenNodes
  })

  const isNotEmpty = computed(() => {
    return flattenTree.value.length > 0
  })

  function createTreeV2(data: TreeV2Data): TreeV2 {
    const treeNodeMap: Map<TreeV2Key, TreeV2Node> = new Map()
    const levelTreeNodeMap: Map<number, TreeV2Node[]> = new Map()
    let maxLevel = 1
    function traverse(
      nodes: TreeV2Data,
      level = 1,
      parent: TreeV2Node | undefined = undefined
    ) {
      const siblings: TreeV2Node[] = []
      for (const rawNode of nodes) {
        const value = getKey(rawNode)
        const node: TreeV2Node = {
          level,
          key: value,
          data: rawNode,
        }
        node.label = getLabel(rawNode)
        node.parent = parent
        const children = getChildren(rawNode)
        node.disabled = getDisabled(rawNode)
        node.isLeaf = !children || children.length === 0
        node.expanded = expandedKeySet.value.has(value)
        if (children && children.length) {
          node.children = traverse(children, level + 1, node)
        }
        siblings.push(node)
        treeNodeMap.set(value, node)
        if (!levelTreeNodeMap.has(level)) {
          levelTreeNodeMap.set(level, [])
        }
        levelTreeNodeMap.get(level)?.push(node)
      }
      if (level > maxLevel) {
        maxLevel = level
      }
      return siblings
    }
    const treeNodes: TreeV2Node[] = traverse(data)
    return {
      treeNodeMap,
      levelTreeNodeMap,
      maxLevel,
      treeNodes,
    }
  }

  function filter(query: string) {
    const keys = doFilter(query)
    if (keys) {
      expandedKeySet.value = keys
    }
  }

  function getChildren(node: TreeV2NodeData): TreeV2NodeData[] {
    return node[childrenKey.value]
  }

  function getKey(node: TreeV2NodeData): TreeV2Key {
    if (!node) {
      return ''
    }
    return node[valueKey.value]
  }

  function getDisabled(node: TreeV2NodeData): boolean {
    return node[disabledKey.value]
  }

  function getLabel(node: TreeV2NodeData): string {
    return node[labelKey.value]
  }

  function toggleExpand(node: TreeV2Node) {
    const expandedKeys = expandedKeySet.value
    if (expandedKeys.has(node.key)) {
      collapseNode(node)
    } else {
      expandNode(node)
    }
  }

  function setExpandedKeys(keys: TreeV2Key[]) {
    const expandedKeys = new Set<TreeV2Key>()
    const nodeMap = tree.value!.treeNodeMap

    keys.forEach((k) => {
      let node = nodeMap.get(k)
      while (node && !expandedKeys.has(node.key)) {
        expandedKeys.add(node.key)
        node.expanded = true
        node = node.parent
      }
    })

    expandedKeySet.value = expandedKeys
  }

  function handleNodeClick(node: TreeV2Node, e: MouseEvent) {
    emit(NODE_CLICK, node.data, node, e)
    handleCurrentChange(node)
    if (props.expandOnClickNode) {
      toggleExpand(node)
    }
    if (
      props.showCheckbox &&
      (props.checkOnClickNode || (node.isLeaf && props.checkOnClickLeaf)) &&
      !node.disabled
    ) {
      toggleCheckbox(node, !isChecked(node), true)
    }
  }

  function handleNodeDrop(node: TreeV2Node, e: DragEvent) {
    emit(NODE_DROP, node.data, node, e)
  }

  function handleCurrentChange(node: TreeV2Node) {
    if (!isCurrent(node)) {
      currentKey.value = node.key
      emit(CURRENT_CHANGE, node.data, node)
    }
  }

  function handleNodeCheck(node: TreeV2Node, checked: CheckboxValueType) {
    toggleCheckbox(node, checked)
  }

  function expandNode(node: TreeV2Node) {
    const keySet = expandedKeySet.value
    if (tree.value && props.accordion) {
      // whether only one node among the same level can be expanded at one time
      const { treeNodeMap } = tree.value
      keySet.forEach((key) => {
        const treeNode = treeNodeMap.get(key)
        if (node && node.level === treeNode?.level) {
          keySet.delete(key)
          treeNode.expanded = false
        }
      })
    }
    keySet.add(node.key)
    node.expanded = true
    emit(NODE_EXPAND, node.data, node)
  }

  function collapseNode(node: TreeV2Node) {
    expandedKeySet.value.delete(node.key)
    node.expanded = false
    emit(NODE_COLLAPSE, node.data, node)
  }

  function isDisabled(node: TreeV2Node): boolean {
    return !!node.disabled
  }

  function isCurrent(node: TreeV2Node): boolean {
    const current = currentKey.value
    return current !== undefined && current === node.key
  }

  function getCurrentNode(): TreeV2NodeData | undefined {
    if (!currentKey.value) return undefined
    return tree.value?.treeNodeMap.get(currentKey.value)?.data
  }

  function getCurrentKey(): TreeV2Key | undefined {
    return currentKey.value
  }

  function setCurrentKey(key: TreeV2Key): void {
    currentKey.value = key
  }

  function setData(data: TreeV2Data) {
    tree.value = createTreeV2(data)
  }

  function getNode(data: TreeV2Key | TreeV2NodeData) {
    const key = isObject(data) ? getKey(data) : data
    return tree.value?.treeNodeMap.get(key)
  }

  function scrollToNode(key: TreeV2Key, strategy: ScrollStrategy = 'auto') {
    const node = getNode(key)
    if (node && listRef.value) {
      listRef.value.scrollToItem(flattenTree.value.indexOf(node), strategy)
    }
  }

  function scrollTo(offset: number) {
    listRef.value?.scrollTo(offset)
  }

  watch(
    () => props.currentNodeKey,
    (key) => {
      currentKey.value = key
    },
    {
      immediate: true,
    }
  )

  watch(
    () => props.defaultExpandedKeys,
    (key) => {
      expandedKeySet.value = new Set<TreeV2Key>(key)
    },
    {
      immediate: true,
    }
  )

  watch(
    () => props.data,
    (data: TreeV2Data) => {
      setData(data)
    },
    {
      immediate: true,
    }
  )

  return {
    tree,
    flattenTree,
    isNotEmpty,
    listRef,
    getKey,
    getChildren,
    toggleExpand,
    toggleCheckbox,
    isChecked,
    isIndeterminate,
    isDisabled,
    isCurrent,
    isForceHiddenExpandIcon,
    handleNodeClick,
    handleNodeDrop,
    handleNodeCheck,
    // expose
    getCurrentNode,
    getCurrentKey,
    setCurrentKey,
    getCheckedKeys,
    getCheckedNodes,
    getHalfCheckedKeys,
    getHalfCheckedNodes,
    setChecked,
    setCheckedKeys,
    filter,
    setData,
    getNode,
    expandNode,
    collapseNode,
    setExpandedKeys,
    scrollToNode,
    scrollTo,
  }
}
