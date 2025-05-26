import type {
  Component,
  ComponentInternalInstance,
  Ref,
  SetupContext,
  VNode,
  h,
} from 'vue'
import type Node from './model/node'
import type TreeStore from './model/tree-store'

export interface RootTreeType {
  ctx: SetupContext<any>
  props: TreeComponentProps
  store: Ref<TreeStore>
  root: Ref<Node>
  currentNode: Ref<Node>
  instance: ComponentInternalInstance
}

export type hType = typeof h
export type TreeData = TreeNodeData[]
export type TreeKey = string | number
export interface FakeNode {
  data: TreeNodeData
}
export type TreeNodeData = Record<string, any>
export interface TreeNodeLoadedDefaultProps {
  checked?: boolean
}
export interface TreeNodeChildState {
  all: boolean
  none: boolean
  allWithoutDisable: boolean
  half: boolean
}
export interface TreeNodeOptions {
  data: TreeNodeData
  store: TreeStore
  parent?: Node
}
export interface TreeStoreNodesMap {
  [key: string]: Node
}
export interface TreeStoreOptions {
  key: TreeKey
  data: TreeData
  lazy: boolean
  props: TreeOptionProps
  load: LoadFunction
  currentNodeKey: TreeKey
  checkStrictly: boolean
  checkDescendants: boolean
  defaultCheckedKeys: TreeKey[]
  defaultExpandedKeys: TreeKey[]
  autoExpandParent: boolean
  defaultExpandAll: boolean
  filterNodeMethod: FilterNodeMethodFunction
}
export interface TreeOptionProps {
  children?: string
  label?: string | ((data: TreeNodeData, node: Node) => string)
  disabled?: string | ((data: TreeNodeData, node: Node) => boolean)
  isLeaf?: string | ((data: TreeNodeData, node: Node) => boolean)
  class?: (
    data: TreeNodeData,
    node: Node
  ) => string | { [key: string]: boolean }
}
export type RenderContentFunction = (
  h: hType,
  context: RenderContentContext
) => VNode | VNode[]
export interface RenderContentContext {
  _self: ComponentInternalInstance
  node: Node
  data: TreeNodeData
  store: TreeStore
}
export type AllowDragFunction = (node: Node) => boolean
export type AllowDropType = 'inner' | 'prev' | 'next'
export type AllowDropFunction = (
  draggingNode: Node,
  dropNode: Node,
  type: AllowDropType
) => boolean
export type LoadFunction = (
  rootNode: Node,
  loadedCallback: (data: TreeData) => void,
  stopLoading: () => void
) => void
export type FilterValue = any
export type FilterNodeMethodFunction = (
  value: FilterValue,
  data: TreeNodeData,
  child: Node
) => boolean
export interface TreeComponentProps {
  data: TreeData
  emptyText: string
  renderAfterExpand: boolean
  nodeKey: string
  checkStrictly: boolean
  expandOnClickNode: boolean
  defaultExpandAll: boolean
  checkOnClickNode: boolean
  checkOnClickLeaf: boolean
  checkDescendants: boolean
  autoExpandParent: boolean
  defaultCheckedKeys: TreeKey[]
  defaultExpandedKeys: TreeKey[]
  currentNodeKey: TreeKey
  renderContent: RenderContentFunction
  showCheckbox: boolean
  draggable: boolean
  allowDrag: AllowDragFunction
  allowDrop: AllowDropFunction
  props: TreeOptionProps
  lazy: boolean
  highlightCurrent: boolean
  load: LoadFunction
  filterNodeMethod: FilterNodeMethodFunction
  accordion: boolean
  indent: number
  icon: string | Component
}

export type NodeDropType = 'before' | 'after' | 'inner' | 'none'
