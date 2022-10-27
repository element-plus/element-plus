import { isFunction } from '@element-plus/utils'
import type { SetupContext } from 'vue'
import type Node from './node'
import type { NodeKey, RootTreeType, TreeNodeData } from '../tree.type'

export const NODE_KEY = '$treeNodeId'

export const markNodeData = function (node: Node, data: TreeNodeData): void {
  if (!data || data[NODE_KEY]) return
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false,
  })
}

export const getNodeKey = function (key: NodeKey, data: TreeNodeData): any {
  if (isFunction(key)) return key(data)
  if (!key) return data?.[NODE_KEY]
  return data?.[key]
}

export const handleCurrentChange = (
  store: RootTreeType['store'],
  emit: SetupContext['emit'],
  setCurrent: () => void
) => {
  const preCurrentNode = store.value.currentNode
  setCurrent()
  const currentNode = store.value.currentNode
  if (preCurrentNode === currentNode) return

  emit('current-change', currentNode ? currentNode : null, currentNode)
}
