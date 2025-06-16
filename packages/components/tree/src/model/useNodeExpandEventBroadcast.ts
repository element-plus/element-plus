// @ts-nocheck
import { inject, provide } from 'vue'
import { TREE_NODE_MAP_INJECTION_KEY } from '../tokens'

import type Node from '../model/node'

interface NodeMap {
  treeNodeExpand(node: Node): void
  children: NodeMap[]
}

export function useNodeExpandEventBroadcast(props) {
  const parentNodeMap = inject<NodeMap>(TREE_NODE_MAP_INJECTION_KEY, null)
  const currentNodeMap: NodeMap = {
    treeNodeExpand: (node) => {
      if (props.node !== node) {
        props.node.collapse()
      }
    },
    children: [],
  }

  if (parentNodeMap) {
    parentNodeMap.children.push(currentNodeMap)
  }

  provide(TREE_NODE_MAP_INJECTION_KEY, currentNodeMap)

  return {
    broadcastExpanded: (node: Node): void => {
      if (!props.accordion) return
      for (const childNode of currentNodeMap.children) {
        childNode.treeNodeExpand(node)
      }
    },
  }
}
