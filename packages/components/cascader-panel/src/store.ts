import { isEqual } from 'lodash-unified'
import Node from './node'
import type { Nullable } from '@element-plus/utils'
import type {
  CascaderConfig,
  CascaderNodePathValue,
  CascaderNodeValue,
  CascaderOption,
} from './node'
import type { CascaderValue } from './types'

const flatNodes = (nodes: Node[], leafOnly: boolean) => {
  return nodes.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node)
    } else {
      !leafOnly && res.push(node)
      res = res.concat(flatNodes(node.children, leafOnly))
    }
    return res
  }, [] as Node[])
}

export default class Store {
  readonly nodes: Node[]
  readonly allNodes: Node[]
  readonly leafNodes: Node[]

  constructor(data: CascaderOption[], readonly config: CascaderConfig) {
    const nodes = (data || []).map(
      (nodeData) => new Node(nodeData, this.config)
    )
    this.nodes = nodes
    this.allNodes = flatNodes(nodes, false)
    this.leafNodes = flatNodes(nodes, true)
  }

  getNodes() {
    return this.nodes
  }

  getMatchedNodes(values: CascaderValue[], leafOnly = false) {
    interface TreeNode {
      originalNode?: Node
      children?: Map<unknown, TreeNode>
    }
    const root: TreeNode = {
      children: (function reorganize(nodes) {
        return nodes.reduce((map, node) => {
          map.set(node.value, {
            originalNode: !leafOnly || node.isLeaf ? node : undefined,
            children: reorganize(node.children),
          })
          return map
        }, new Map<unknown, TreeNode>())
      })(this.nodes),
    }
    const leafNodes = this.getFlattedNodes(leafOnly)
    const nodeMap = leafNodes.reduce((map, node) => {
      map.set(node.value, node)
      return map
    }, new Map<unknown, Node>())

    const matchedNodes: Node[] = []
    values.forEach((value) => {
      let matchedNode = nodeMap.get(value)
      if (!matchedNode && Array.isArray(value)) {
        let node = root
        for (const v of value) {
          node = node.children?.get(v)!
          if (!node) break
        }
        if (node && node.originalNode) matchedNode = node.originalNode
      }
      // degrade to for loop, address with HashMap?
      if (!matchedNode)
        matchedNode = leafNodes.find(
          (node) =>
            isEqual(node.value, value) || isEqual(node.pathValues, value)
        )

      if (matchedNode) matchedNodes.push(matchedNode)
    })
    return matchedNodes
  }

  getFlattedNodes(leafOnly: boolean) {
    return leafOnly ? this.leafNodes : this.allNodes
  }

  appendNode(nodeData: CascaderOption, parentNode?: Node) {
    const node = parentNode
      ? parentNode.appendChild(nodeData)
      : new Node(nodeData, this.config)

    if (!parentNode) this.nodes.push(node)

    this.allNodes.push(node)
    node.isLeaf && this.leafNodes.push(node)
  }

  appendNodes(nodeDataList: CascaderOption[], parentNode: Node) {
    nodeDataList.forEach((nodeData) => this.appendNode(nodeData, parentNode))
  }

  // when checkStrictly, leaf node first
  getNodeByValue(
    value: CascaderNodeValue | CascaderNodePathValue,
    leafOnly = false
  ): Nullable<Node> {
    if (!value && value !== 0) return null

    const node = this.getFlattedNodes(leafOnly).find(
      (node) => isEqual(node.value, value) || isEqual(node.pathValues, value)
    )

    return node || null
  }

  getSameNode(node: Node): Nullable<Node> {
    if (!node) return null

    const node_ = this.getFlattedNodes(false).find(
      ({ value, level }) => isEqual(node.value, value) && node.level === level
    )

    return node_ || null
  }
}
