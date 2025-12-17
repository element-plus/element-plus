import { inject, onBeforeUnmount, provide } from 'vue'
import { TREE_NODE_MAP_INJECTION_KEY } from '../tokens'

import type Node from '../model/node'

interface NodeMap {
  treeNodeExpand(node?: Node): void
  children: Set<NodeMap>
}

interface Props {
  node?: Node
  accordion: boolean
}

export function useNodeExpandEventBroadcast(props: Props) {
  const parentNodeMap = inject(
    TREE_NODE_MAP_INJECTION_KEY,
    null
  ) as NodeMap | null
  let currentNodeMap: NodeMap | null = {
    treeNodeExpand: (node) => {
      if (props.node !== node) {
        props.node?.collapse()
      }
    },
    children: new Set(),
  }

  if (parentNodeMap) {
    parentNodeMap.children.add(currentNodeMap)
  }

  onBeforeUnmount(() => {
    if (parentNodeMap) {
      parentNodeMap.children.delete(currentNodeMap!)
    }
    currentNodeMap = null
  })

  provide(TREE_NODE_MAP_INJECTION_KEY, currentNodeMap)

  return {
    broadcastExpanded: (node?: Node): void => {
      if (!props.accordion) return
      for (const childNode of currentNodeMap!.children) {
        childNode.treeNodeExpand(node)
      }
    },
  }
}
