import isEqual from 'lodash/isEqual'
import Node from './node'
import type {
  CascaderNodeValue,
  CascaderNodePathValue,
  CascaderOption,
  CascaderConfig,
} from './types'

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

  constructor (data: CascaderOption[], readonly config: CascaderConfig) {
    const nodes = (data || []).map(nodeData => new Node(nodeData, this.config))
    this.nodes = nodes
    this.allNodes = flatNodes(nodes, false)
    this.leafNodes = flatNodes(nodes, true)
  }

  getNodes () {
    return this.nodes
  }

  getFlattedNodes (leafOnly: boolean) {
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
    nodeDataList.forEach(nodeData => this.appendNode(nodeData, parentNode))
  }

  // when checkStrictly, leaf node first
  getNodeByValue (value: CascaderNodeValue | CascaderNodePathValue, leafOnly = false): Nullable<Node> {
    if (!value && value !== 0) return null

    const nodes = this.getFlattedNodes(leafOnly)
      .filter(node => isEqual(node.value, value) || isEqual(node.pathValues, value))

    return nodes[0] || null
  }

  getSameNode (node: Node): Nullable<Node> {
    if (!node) return null

    const nodes = this.getFlattedNodes(false)
      .filter(({ value, level }) => isEqual(node.value, value) && node.level === level)

    return nodes[0] || null
  }

}
