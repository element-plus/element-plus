import { reactive } from 'vue'
import { isNil } from 'lodash-unified'
import {
  hasOwn,
  isArray,
  isBoolean,
  isFunction,
  isString,
  isUndefined,
} from '@element-plus/utils'
import { NODE_KEY, markNodeData } from './util'

import type TreeStore from './tree-store'
import type { Nullable } from '@element-plus/utils'
import type {
  FakeNode,
  TreeKey,
  TreeNodeChildState,
  TreeNodeData,
  TreeNodeLoadedDefaultProps,
  TreeNodeOptions,
} from '../tree.type'

export const getChildState = (node: Node[]): TreeNodeChildState => {
  let all = true
  let none = true
  let allWithoutDisable = true
  let isEffectivelyChecked = true
  for (let i = 0, j = node.length; i < j; i++) {
    const n = node[i]
    if (n.checked !== true || n.indeterminate) {
      all = false
      if (!n.disabled) {
        allWithoutDisable = false
      }
    }
    if (n.checked !== false || n.indeterminate) {
      none = false
    }
    if (!n.isEffectivelyChecked) {
      isEffectivelyChecked = false
    }
  }

  return {
    all,
    none,
    allWithoutDisable,
    half: !all && !none,
    isEffectivelyChecked,
  }
}

const reInitChecked = function (node: Node): void {
  if (node.childNodes.length === 0 || node.loading) {
    node.isEffectivelyChecked = node.disabled || node.checked
    return
  }

  const { all, none, half, isEffectivelyChecked } = getChildState(
    node.childNodes
  )
  node.isEffectivelyChecked = isEffectivelyChecked
  if (all) {
    node.checked = true
    node.indeterminate = false
  } else if (half) {
    node.checked = false
    node.indeterminate = true
  } else if (none) {
    node.checked = false
    node.indeterminate = false
  }

  const parent = node.parent
  if (!parent || parent.level === 0) return

  if (!node.store.checkStrictly) {
    reInitChecked(parent)
  }
}

const getPropertyFromData = function (node: Node, prop: string): any {
  const props = node.store.props
  const data = node.data || {}
  const config = (props as any)[prop]

  if (isFunction(config)) {
    return config(data, node)
  } else if (isString(config)) {
    return data[config]
  } else if (isUndefined(config)) {
    const dataProp = data[prop]
    return isUndefined(dataProp) ? '' : dataProp
  }
}

const setCanFocus = function (childNodes: Node[], focus: boolean): void {
  childNodes.forEach((item) => {
    item.canFocus = focus
    setCanFocus(item.childNodes, focus)
  })
}

let nodeIdSeed = 0

class Node {
  id: number
  text: string | null
  checked: boolean
  indeterminate: boolean
  data: TreeNodeData
  expanded: boolean
  parent: Node | null
  visible: boolean
  isCurrent: boolean
  store!: TreeStore
  isLeafByUser: boolean | undefined = undefined
  isLeaf: boolean | undefined = undefined
  canFocus: boolean

  level: number
  loaded: boolean
  childNodes: Node[]
  loading: boolean

  /**
   * Determines whether the current tree node is effectively checked.
   *
   * Rules:
   * 1. A disabled leaf node is always considered checked.
   * 2. A non-disabled leaf node reflects its actual checked state.
   * 3. A non-leaf node is considered checked only when:
   *    - All of its child nodes are effectively checked, and
   *    - Each child follows the same evaluation rules:
   *      - Disabled leaf nodes follow rule #1.
   *      - Non-leaf child nodes are recursively evaluated under this rule (#3).
   */
  isEffectivelyChecked: boolean = false

  constructor(options: TreeNodeOptions) {
    this.id = nodeIdSeed++
    this.text = null
    this.checked = false
    this.indeterminate = false
    this.data = null as unknown as TreeNodeData
    this.expanded = false
    this.parent = null as Node | null
    this.visible = true
    this.isCurrent = false
    this.canFocus = false

    for (const name in options) {
      if (hasOwn(options, name)) {
        this[name] = options[name]
      }
    }

    // internal
    this.level = 0
    this.loaded = false
    this.childNodes = []
    this.loading = false

    if (this.parent) {
      this.level = this.parent.level + 1
    }
  }

  initialize() {
    const store = this.store
    if (!store) {
      throw new Error('[Node]store is required!')
    }
    store.registerNode(this)

    const props = store.props
    if (props && typeof props.isLeaf !== 'undefined') {
      const isLeaf = getPropertyFromData(this, 'isLeaf')
      if (isBoolean(isLeaf)) {
        this.isLeafByUser = isLeaf
      }
    }

    if (store.lazy !== true && this.data) {
      this.setData(this.data)

      if (store.defaultExpandAll) {
        this.expanded = true
        this.canFocus = true
      }
    } else if (
      this.level > 0 &&
      store.lazy &&
      store.defaultExpandAll &&
      !this.isLeafByUser
    ) {
      this.expand()
    }
    if (!isArray(this.data)) {
      markNodeData(this, this.data)
    }
    if (!this.data) return

    const defaultExpandedKeys = store.defaultExpandedKeys
    const key = store.key

    if (
      key &&
      !isNil(this.key) &&
      defaultExpandedKeys &&
      defaultExpandedKeys.includes(this.key)
    ) {
      this.expand(null, store.autoExpandParent)
    }

    if (
      key &&
      store.currentNodeKey !== undefined &&
      this.key === store.currentNodeKey
    ) {
      store.currentNode && (store.currentNode.isCurrent = false)
      store.currentNode = this
      store.currentNode.isCurrent = true
    }

    if (store.lazy) {
      store._initDefaultCheckedNode(this)
    }

    this.updateLeafState()
    if (this.level === 1 || this.parent?.expanded === true) this.canFocus = true
  }

  setData(data: TreeNodeData): void {
    if (!isArray(data)) {
      markNodeData(this, data)
    }

    this.data = data
    this.childNodes = []

    let children
    if (this.level === 0 && isArray(this.data)) {
      children = this.data
    } else {
      children = getPropertyFromData(this, 'children') || []
    }

    for (let i = 0, j = children.length; i < j; i++) {
      this.insertChild({ data: children[i] })
    }
  }

  get label(): string {
    return getPropertyFromData(this, 'label')
  }

  get key(): TreeKey | null | undefined {
    const nodeKey = this.store.key
    if (this.data) return this.data[nodeKey]
    return null
  }

  get disabled(): boolean {
    return getPropertyFromData(this, 'disabled')
  }

  get nextSibling(): Nullable<Node> {
    const parent = this.parent
    if (parent) {
      const index = parent.childNodes.indexOf(this)
      if (index > -1) {
        return parent.childNodes[index + 1]
      }
    }
    return null
  }

  get previousSibling(): Nullable<Node> {
    const parent = this.parent
    if (parent) {
      const index = parent.childNodes.indexOf(this)
      if (index > -1) {
        return index > 0 ? parent.childNodes[index - 1] : null
      }
    }
    return null
  }

  contains(target: Node, deep = true): boolean {
    return (this.childNodes || []).some(
      (child) => child === target || (deep && child.contains(target))
    )
  }

  remove(): void {
    const parent = this.parent
    if (parent) {
      parent.removeChild(this)
    }
  }

  insertChild(child?: FakeNode | Node, index?: number, batch?: boolean): void {
    if (!child) throw new Error('InsertChild error: child is required.')

    if (!(child instanceof Node)) {
      if (!batch) {
        const children = this.getChildren(true)
        if (!children?.includes(child.data)) {
          if (isUndefined(index) || index < 0) {
            children?.push(child.data)
          } else {
            children?.splice(index, 0, child.data)
          }
        }
      }
      Object.assign(child, {
        parent: this,
        store: this.store,
      })
      child = reactive(new Node(child as TreeNodeOptions))
      if (child instanceof Node) {
        child.initialize()
      }
    }

    ;(child as Node).level = this.level + 1

    if (isUndefined(index) || index < 0) {
      this.childNodes.push(child as Node)
    } else {
      this.childNodes.splice(index, 0, child as Node)
    }

    this.updateLeafState()
  }

  insertBefore(child: FakeNode | Node, ref: Node): void {
    let index
    if (ref) {
      index = this.childNodes.indexOf(ref)
    }
    this.insertChild(child, index)
  }

  insertAfter(child: FakeNode | Node, ref: Node): void {
    let index
    if (ref) {
      index = this.childNodes.indexOf(ref)
      if (index !== -1) index += 1
    }
    this.insertChild(child, index)
  }

  removeChild(child: Node): void {
    const children = this.getChildren() || []
    const dataIndex = children.indexOf(child.data)
    if (dataIndex > -1) {
      children.splice(dataIndex, 1)
    }

    const index = this.childNodes.indexOf(child)

    if (index > -1) {
      this.store && this.store.deregisterNode(child)
      child.parent = null
      this.childNodes.splice(index, 1)
    }

    this.updateLeafState()
  }

  removeChildByData(data: TreeNodeData | null): void {
    const targetNode = this.childNodes.find((child) => child.data === data)

    if (targetNode) {
      this.removeChild(targetNode)
    }
  }

  expand(callback?: (() => void) | null, expandParent?: boolean): void {
    const done = () => {
      if (expandParent) {
        let parent = this.parent
        while (parent && parent.level > 0) {
          parent.expanded = true
          parent = parent.parent
        }
      }
      this.expanded = true
      if (callback) callback()
      setCanFocus(this.childNodes, true)
    }

    if (this.shouldLoadData()) {
      this.loadData((data) => {
        if (isArray(data)) {
          if (this.checked) {
            this.setChecked(true, true)
          } else if (!this.store.checkStrictly) {
            reInitChecked(this)
          }
          done()
        }
      })
    } else {
      done()
    }
  }

  doCreateChildren(
    array: TreeNodeData[],
    defaultProps: TreeNodeLoadedDefaultProps = {}
  ): void {
    array.forEach((item) => {
      this.insertChild(
        Object.assign({ data: item }, defaultProps),
        undefined,
        true
      )
    })
  }

  collapse(): void {
    this.expanded = false
    setCanFocus(this.childNodes, false)
  }

  shouldLoadData() {
    return Boolean(this.store.lazy === true && this.store.load && !this.loaded)
  }

  updateLeafState(): void {
    if (
      this.store.lazy === true &&
      this.loaded !== true &&
      typeof this.isLeafByUser !== 'undefined'
    ) {
      this.isLeaf = this.isLeafByUser
      this.isEffectivelyChecked = this.isLeaf && this.disabled
      return
    }
    const childNodes = this.childNodes
    if (
      !this.store.lazy ||
      (this.store.lazy === true && this.loaded === true)
    ) {
      this.isLeaf = !childNodes || childNodes.length === 0
      this.isEffectivelyChecked = this.isLeaf && this.disabled
      return
    }
    this.isLeaf = false
  }

  setChecked(
    value?: boolean | string,
    deep?: boolean,
    recursion?: boolean,
    passValue?: boolean
  ) {
    this.indeterminate = value === 'half'
    this.checked = value === true
    this.isEffectivelyChecked =
      !this.childNodes.length && (this.disabled || this.checked)

    if (this.store.checkStrictly) return

    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const handleDescendants = (): void => {
        if (deep) {
          const childNodes = this.childNodes
          for (let i = 0, j = childNodes.length; i < j; i++) {
            const child = childNodes[i]
            passValue = passValue || value !== false
            const isCheck =
              child.disabled && child.isLeaf ? child.checked : passValue
            child.setChecked(isCheck, deep, true, passValue)
          }
          const { half, all, isEffectivelyChecked } = getChildState(childNodes)
          if (!all) {
            this.checked = all
            this.indeterminate = half
          }
          this.isEffectivelyChecked = !this.childNodes.length
            ? this.disabled || this.checked
            : isEffectivelyChecked
        }
      }

      if (this.shouldLoadData()) {
        // Only work on lazy load data.
        this.loadData(
          () => {
            handleDescendants()
            reInitChecked(this)
          },
          {
            checked: value !== false,
          }
        )
        return
      } else {
        handleDescendants()
      }
    }

    const parent = this.parent
    if (!parent || parent.level === 0) return

    if (!recursion) {
      reInitChecked(parent)
    }
  }

  getChildren(forceInit = false): TreeNodeData | TreeNodeData[] | null {
    // this is data
    if (this.level === 0) return this.data
    const data = this.data
    if (!data) return null

    const props = this.store.props
    let children = 'children'
    if (props) {
      children = props.children || 'children'
    }

    if (isUndefined(data[children])) {
      data[children] = null
    }

    if (forceInit && !data[children]) {
      data[children] = []
    }

    return data[children]
  }

  updateChildren(): void {
    const newData = (this.getChildren() || []) as TreeNodeData[]
    const oldData = this.childNodes.map((node) => node.data)

    const newDataMap: Record<TreeKey, TreeNodeData> = {}
    const newNodes: TreeNodeData[] = []

    newData.forEach((item, index) => {
      const key = item[NODE_KEY]
      const isNodeExists =
        !!key && oldData.some((data) => data?.[NODE_KEY] === key)
      if (isNodeExists) {
        newDataMap[key] = { index, data: item }
      } else {
        newNodes.push({ index, data: item })
      }
    })

    if (!this.store.lazy) {
      oldData.forEach((item) => {
        if (!newDataMap[item?.[NODE_KEY]]) this.removeChildByData(item)
      })
    }

    newNodes.forEach(({ index, data }) => {
      this.insertChild({ data }, index)
    })

    this.updateLeafState()
  }

  loadData(
    callback: (data?: TreeNodeData[]) => void,
    defaultProps: TreeNodeLoadedDefaultProps = {}
  ) {
    if (
      this.store.lazy === true &&
      this.store.load &&
      !this.loaded &&
      (!this.loading || Object.keys(defaultProps).length)
    ) {
      this.loading = true

      const resolve = (children: TreeNodeData[]) => {
        this.childNodes = []

        this.doCreateChildren(children, defaultProps)
        this.loaded = true
        this.loading = false

        this.updateLeafState()
        if (callback) {
          callback.call(this, children)
        }
      }
      const reject = () => {
        this.loading = false
      }

      this.store.load(this, resolve, reject)
    } else {
      if (callback) {
        callback.call(this)
      }
    }
  }

  eachNode(callback: (node: Node) => void) {
    const arr: Node[] = [this]
    while (arr.length) {
      const node = arr.shift()!
      arr.unshift(...node.childNodes)
      callback(node)
    }
  }

  reInitChecked() {
    if (this.store.checkStrictly) return
    reInitChecked(this)
  }
}

export default Node
