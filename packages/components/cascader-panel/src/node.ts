// @ts-nocheck
import { isFunction } from '@vue/shared'
import { capitalize, isEmpty, isUndefined } from '@element-plus/utils'
import type { VNode } from 'vue'

export type CascaderNodeValue = string | number
export type CascaderNodePathValue = CascaderNodeValue[]
export type CascaderValue =
  | CascaderNodeValue
  | CascaderNodePathValue
  | (CascaderNodeValue | CascaderNodePathValue)[]
export type CascaderConfig = Required<CascaderProps>
export type ExpandTrigger = 'click' | 'hover'
export type isDisabled = (data: CascaderOption, node: Node) => boolean
export type isLeaf = (data: CascaderOption, node: Node) => boolean
export type Resolve = (dataList?: CascaderOption[]) => void
export type LazyLoad = (node: Node, resolve: Resolve) => void
export type RenderLabel = ({
  node: Node,
  data: CascaderOption,
}) => VNode | VNode[]
export interface CascaderOption extends Record<string, unknown> {
  label?: string
  value?: CascaderNodeValue
  children?: CascaderOption[]
  disabled?: boolean
  leaf?: boolean
}

export interface CascaderProps {
  expandTrigger?: ExpandTrigger
  multiple?: boolean
  checkStrictly?: boolean
  emitPath?: boolean
  lazy?: boolean
  lazyLoad?: LazyLoad
  value?: string
  label?: string
  children?: string
  disabled?: string | isDisabled
  leaf?: string | isLeaf
  hoverThreshold?: number
}

export type Nullable<T> = null | T

type ChildrenData = CascaderOption[] | undefined

let uid = 0

const calculatePathNodes = (node: Node) => {
  const nodes = [node]
  let { parent } = node

  while (parent) {
    nodes.unshift(parent)
    parent = parent.parent
  }

  return nodes
}

class Node {
  readonly uid: number = uid++
  readonly level: number
  readonly value: CascaderNodeValue
  readonly label: string
  readonly pathNodes: Node[]
  readonly pathValues: CascaderNodePathValue
  readonly pathLabels: string[]

  childrenData: ChildrenData
  children: Node[]
  text: string
  loaded: boolean
  /**
   * Is it checked
   *
   * @default false
   */
  checked = false
  /**
   * Used to indicate the intermediate state of unchecked and fully checked child nodes
   *
   * @default false
   */
  indeterminate = false
  /**
   * Loading Status
   *
   * @default false
   */
  loading = false

  constructor(
    readonly data: Nullable<CascaderOption>,
    readonly config: CascaderConfig,
    readonly parent?: Node,
    readonly root = false
  ) {
    const { value: valueKey, label: labelKey, children: childrenKey } = config

    const childrenData = data[childrenKey] as ChildrenData
    const pathNodes = calculatePathNodes(this)

    this.level = root ? 0 : parent ? parent.level + 1 : 1
    this.value = data[valueKey] as CascaderNodeValue
    this.label = data[labelKey] as string
    this.pathNodes = pathNodes
    this.pathValues = pathNodes.map((node) => node.value)
    this.pathLabels = pathNodes.map((node) => node.label)
    this.childrenData = childrenData
    this.children = (childrenData || []).map(
      (child) => new Node(child, config, this)
    )
    this.loaded = !config.lazy || this.isLeaf || !isEmpty(childrenData)
  }

  get isDisabled(): boolean {
    const { data, parent, config } = this
    const { disabled, checkStrictly } = config
    const isDisabled = isFunction(disabled)
      ? disabled(data, this)
      : !!data[disabled]
    return isDisabled || (!checkStrictly && parent?.isDisabled)
  }

  get isLeaf(): boolean {
    const { data, config, childrenData, loaded } = this
    const { lazy, leaf } = config
    const isLeaf = isFunction(leaf) ? leaf(data, this) : data[leaf]

    return isUndefined(isLeaf)
      ? lazy && !loaded
        ? false
        : !(Array.isArray(childrenData) && childrenData.length)
      : !!isLeaf
  }

  get valueByOption() {
    return this.config.emitPath ? this.pathValues : this.value
  }

  appendChild(childData: CascaderOption) {
    const { childrenData, children } = this
    const node = new Node(childData, this.config, this)

    if (Array.isArray(childrenData)) {
      childrenData.push(childData)
    } else {
      this.childrenData = [childData]
    }

    children.push(node)

    return node
  }

  calcText(allLevels: boolean, separator: string) {
    const text = allLevels ? this.pathLabels.join(separator) : this.label
    this.text = text
    return text
  }

  broadcast(event: string, ...args: unknown[]) {
    const handlerName = `onParent${capitalize(event)}`
    this.children.forEach((child) => {
      if (child) {
        // bottom up
        child.broadcast(event, ...args)
        child[handlerName] && child[handlerName](...args)
      }
    })
  }

  emit(event: string, ...args: unknown[]) {
    const { parent } = this
    const handlerName = `onChild${capitalize(event)}`
    if (parent) {
      parent[handlerName] && parent[handlerName](...args)
      parent.emit(event, ...args)
    }
  }

  onParentCheck(checked: boolean) {
    if (!this.isDisabled) {
      this.setCheckState(checked)
    }
  }

  onChildCheck() {
    const { children } = this
    const validChildren = children.filter((child) => !child.isDisabled)
    const checked = validChildren.length
      ? validChildren.every((child) => child.checked)
      : false

    this.setCheckState(checked)
  }

  setCheckState(checked: boolean) {
    const totalNum = this.children.length
    const checkedNum = this.children.reduce((c, p) => {
      const num = p.checked ? 1 : p.indeterminate ? 0.5 : 0
      return c + num
    }, 0)

    this.checked =
      this.loaded &&
      this.children
        .filter((child) => !child.isDisabled)
        .every((child) => child.loaded && child.checked) &&
      checked
    this.indeterminate =
      this.loaded && checkedNum !== totalNum && checkedNum > 0
  }

  doCheck(checked: boolean) {
    if (this.checked === checked) return

    const { checkStrictly, multiple } = this.config

    if (checkStrictly || !multiple) {
      this.checked = checked
    } else {
      // bottom up to unify the calculation of the indeterminate state
      this.broadcast('check', checked)
      this.setCheckState(checked)
      this.emit('check')
    }
  }
}

export default Node
