import Node from './node'
import { TreeKey, TreeNodeData } from '../tree.type'

export const NODE_KEY = '$treeNodeId'

export const markNodeData = function(node: Node, data: TreeNodeData): void {
  if (!data || data[NODE_KEY]) return
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false,
  })
}

export const getNodeKey = function(key: TreeKey, data: TreeNodeData): any {
  if (!key) return data[NODE_KEY]
  return data[key]
}
