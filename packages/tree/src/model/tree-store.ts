import { hasOwn } from '@vue/shared'
import Node from './node'
import { getNodeKey } from './util'
import {
  TreeKey,
  TreeData,
  TreeStoreNodesMap,
  LoadFunction,
  FilterNodeMethodFunction,
  TreeOptionProps,
  TreeStoreOptions,
  FilterValue,
  TreeNodeData,
} from '../tree.type'

export default class TreeStore {
  currentNode: Node
  currentNodeKey: TreeKey
  nodesMap: TreeStoreNodesMap
  root: Node
  data: TreeData
  lazy: boolean
  load: LoadFunction
  filterNodeMethod: FilterNodeMethodFunction
  key: TreeKey
  defaultCheckedKeys: TreeKey[];
  checkStrictly: boolean;
  defaultExpandedKeys: TreeKey[];
  autoExpandParent: boolean;
  defaultExpandAll: boolean;
  checkDescendants: boolean;
  props: TreeOptionProps;

  constructor(options: TreeStoreOptions) {
    this.currentNode = null
    this.currentNodeKey = null

    for (const option in options) {
      if (hasOwn(options, option)) {
        this[option] = options[option]
      }
    }

    this.nodesMap = {}
  }

  initialize() {
    this.root = new Node({
      data: this.data,
      store: this,
    })
    this.root.initialize()

    if (this.lazy && this.load) {
      const loadFn = this.load
      loadFn(this.root, data => {
        this.root.doCreateChildren(data)
        this._initDefaultCheckedNodes()
      })
    } else {
      this._initDefaultCheckedNodes()
    }
  }

  filter(value: FilterValue): void {
    const filterNodeMethod = this.filterNodeMethod
    const lazy = this.lazy
    const traverse = function(node: TreeStore | Node) {
      const childNodes = (node as TreeStore).root ? (node as TreeStore).root.childNodes : (node as Node).childNodes

      childNodes.forEach(child => {
        child.visible = filterNodeMethod.call(child, value, child.data, child)

        traverse(child)
      })

      if (!(node as Node).visible && childNodes.length) {
        let allHidden = true
        allHidden = !childNodes.some(child => child.visible)

        if ((node as TreeStore).root) {
          (node as TreeStore).root.visible = allHidden === false
        } else {
          (node as Node).visible = allHidden === false
        }
      }
      if (!value) return

      if ((node as Node).visible && !(node as Node).isLeaf && !lazy) (node as Node).expand()
    }

    traverse(this)
  }

  setData(newVal: TreeData): void {
    const instanceChanged = newVal !== this.root.data
    if (instanceChanged) {
      this.root.setData(newVal)
      this._initDefaultCheckedNodes()
    } else {
      this.root.updateChildren()
    }
  }

  getNode(data: TreeKey | TreeNodeData ): Node {
    if (data instanceof Node) return data
    const key = typeof data !== 'object' ? data : getNodeKey(this.key, data)
    return this.nodesMap[key] || null
  }

  insertBefore(data: TreeNodeData, refData: TreeKey | TreeNodeData): void {
    const refNode = this.getNode(refData)
    refNode.parent.insertBefore({ data }, refNode)
  }

  insertAfter(data: TreeNodeData, refData: TreeKey | TreeNodeData): void {
    const refNode = this.getNode(refData)
    refNode.parent.insertAfter({ data }, refNode)
  }

  remove(data: TreeNodeData | Node): void {
    const node = this.getNode(data)

    if (node && node.parent) {
      if (node === this.currentNode) {
        this.currentNode = null
      }
      node.parent.removeChild(node)
    }
  }

  append(data: TreeNodeData, parentData: TreeNodeData| TreeKey | Node ): void {
    const parentNode = parentData ? this.getNode(parentData) : this.root

    if (parentNode) {
      parentNode.insertChild({ data })
    }
  }

  _initDefaultCheckedNodes(): void {
    const defaultCheckedKeys = this.defaultCheckedKeys || []
    const nodesMap = this.nodesMap

    defaultCheckedKeys.forEach(checkedKey => {
      const node = nodesMap[checkedKey]

      if (node) {
        node.setChecked(true, !this.checkStrictly)
      }
    })
  }

  _initDefaultCheckedNode(node: Node): void {
    const defaultCheckedKeys = this.defaultCheckedKeys || []

    if (defaultCheckedKeys.indexOf(node.key) !== -1) {
      node.setChecked(true, !this.checkStrictly)
    }
  }

  setDefaultCheckedKey(newVal: TreeKey[]): void {
    if (newVal !== this.defaultCheckedKeys) {
      this.defaultCheckedKeys = newVal
      this._initDefaultCheckedNodes()
    }
  }

  registerNode(node: Node): void {
    const key = this.key
    if (!node || !node.data) return

    if(!key){
      this.nodesMap[node.id] = node
    }else {
      const nodeKey = node.key
      if (nodeKey !== undefined) this.nodesMap[node.key] = node
    }
  }

  deregisterNode(node: Node): void {
    const key = this.key
    if (!key || !node || !node.data) return

    node.childNodes.forEach(child => {
      this.deregisterNode(child)
    })

    delete this.nodesMap[node.key]
  }

  getCheckedNodes(leafOnly = false, includeHalfChecked = false): TreeNodeData[] {
    const checkedNodes: TreeNodeData[] = []
    const traverse = function(node: TreeStore | Node) {
      const childNodes = (node as TreeStore).root ? (node as TreeStore).root.childNodes : (node as Node).childNodes

      childNodes.forEach(child => {
        if ((child.checked || (includeHalfChecked && child.indeterminate)) && (!leafOnly || (leafOnly && child.isLeaf))) {
          checkedNodes.push(child.data)
        }

        traverse(child)
      })
    }

    traverse(this)

    return checkedNodes
  }

  getCheckedKeys(leafOnly = false): TreeKey[] {
    return this.getCheckedNodes(leafOnly).map(data => (data || {})[this.key])
  }

  getHalfCheckedNodes(): TreeNodeData[] {
    const nodes: TreeNodeData[] = []
    const traverse = function(node: TreeStore | Node) {
      const childNodes = (node as TreeStore).root ? (node as TreeStore).root.childNodes : (node as Node).childNodes

      childNodes.forEach(child => {
        if (child.indeterminate) {
          nodes.push(child.data)
        }

        traverse(child)
      })
    }

    traverse(this)

    return nodes
  }

  getHalfCheckedKeys(): TreeKey[] {
    return this.getHalfCheckedNodes().map(data => (data || {})[this.key])
  }

  _getAllNodes(): Node[] {
    const allNodes: Node[] = []
    const nodesMap = this.nodesMap
    for (const nodeKey in nodesMap) {
      if (hasOwn(nodesMap, nodeKey)) {
        allNodes.push(nodesMap[nodeKey])
      }
    }

    return allNodes
  }

  updateChildren(key: TreeKey, data: TreeData): void {
    const node = this.nodesMap[key]
    if (!node) return
    const childNodes = node.childNodes
    for (let i = childNodes.length - 1; i >= 0; i--) {
      const child = childNodes[i]
      this.remove(child.data)
    }
    for (let i = 0, j = data.length; i < j; i++) {
      const child = data[i]
      this.append(child, node.data)
    }
  }

  _setCheckedKeys(key: TreeKey, leafOnly = false, checkedKeys: { [key: string]: boolean; }): void {
    const allNodes = this._getAllNodes().sort((a, b) => b.level - a.level)
    const cache = Object.create(null)
    const keys = Object.keys(checkedKeys)
    allNodes.forEach(node => node.setChecked(false, false))
    for (let i = 0, j = allNodes.length; i < j; i++) {
      const node = allNodes[i]
      const nodeKey = node.data[key].toString()
      const checked = keys.indexOf(nodeKey) > -1
      if (!checked) {
        if (node.checked && !cache[nodeKey]) {
          node.setChecked(false, false)
        }
        continue
      }

      let parent = node.parent
      while (parent && parent.level > 0) {
        cache[parent.data[key]] = true
        parent = parent.parent
      }

      if (node.isLeaf || this.checkStrictly) {
        node.setChecked(true, false)
        continue
      }
      node.setChecked(true, true)

      if (leafOnly) {
        node.setChecked(false, false)
        const traverse = function(node: Node): void {
          const childNodes = node.childNodes
          childNodes.forEach(child => {
            if (!child.isLeaf) {
              child.setChecked(false, false)
            }
            traverse(child)
          })
        }
        traverse(node)
      }
    }
  }

  setCheckedNodes(array: Node[], leafOnly = false): void {
    const key = this.key
    const checkedKeys = {}
    array.forEach(item => {
      checkedKeys[(item || {})[key]] = true
    })

    this._setCheckedKeys(key, leafOnly, checkedKeys)
  }

  setCheckedKeys(keys: TreeKey[], leafOnly = false): void {
    this.defaultCheckedKeys = keys
    const key = this.key
    const checkedKeys = {}
    keys.forEach(key => {
      checkedKeys[key] = true
    })

    this._setCheckedKeys(key, leafOnly, checkedKeys)
  }

  setDefaultExpandedKeys(keys: TreeKey[]) {
    keys = keys || []
    this.defaultExpandedKeys = keys
    keys.forEach(key => {
      const node = this.getNode(key)
      if (node) node.expand(null, this.autoExpandParent)
    })
  }

  setChecked(data: TreeKey | TreeNodeData, checked: boolean, deep: boolean): void {
    const node = this.getNode(data)

    if (node) {
      node.setChecked(!!checked, deep)
    }
  }

  getCurrentNode(): Node {
    return this.currentNode
  }

  setCurrentNode(currentNode: Node): void {
    const prevCurrentNode = this.currentNode
    if (prevCurrentNode) {
      prevCurrentNode.isCurrent = false
    }
    this.currentNode = currentNode
    this.currentNode.isCurrent = true
  }

  setUserCurrentNode(node: Node, shouldAutoExpandParent = true): void {
    const key = node[this.key]
    const currNode = this.nodesMap[key]
    this.setCurrentNode(currNode)
    if (shouldAutoExpandParent && this.currentNode.level > 1) {
      this.currentNode.parent.expand(null, true)
    }
  }

  setCurrentNodeKey(key: TreeKey, shouldAutoExpandParent = true): void {
    if (key === null || key === undefined) {
      this.currentNode && (this.currentNode.isCurrent = false)
      this.currentNode = null
      return
    }
    const node = this.getNode(key)
    if (node) {
      this.setCurrentNode(node)
      if (shouldAutoExpandParent && this.currentNode.level > 1) {
        this.currentNode.parent.expand(null, true)
      }
    }
  }
}
