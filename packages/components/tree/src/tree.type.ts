import type {
  Component,
  ComponentInternalInstance,
  Ref,
  SetupContext,
  VNode,
  h,
} from 'vue'
import type TreeNode from './model/node'
import type TreeStore from './model/tree-store'

export interface RootTreeType {
  ctx: SetupContext<any>
  props: TreeComponentProps
  store: Ref<TreeStore>
  root: Ref<TreeNode>
  currentNode: Ref<TreeNode>
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
  parent?: TreeNode
}
export interface TreeStoreNodesMap {
  [key: string]: TreeNode
}
export interface TreeStoreOptions {
  key?: TreeKey
  data: TreeData
  lazy: boolean
  props: TreeOptionProps
  load?: LoadFunction
  currentNodeKey?: TreeKey
  checkStrictly: boolean
  checkDescendants: boolean
  defaultCheckedKeys?: TreeKey[]
  defaultExpandedKeys?: TreeKey[]
  autoExpandParent: boolean
  defaultExpandAll: boolean
  filterNodeMethod?: FilterNodeMethodFunction
}
export interface TreeOptionProps {
  children?: string
  label?: string | ((data: TreeNodeData, node: TreeNode) => string)
  disabled?: string | ((data: TreeNodeData, node: TreeNode) => boolean)
  isLeaf?: string | ((data: TreeNodeData, node: TreeNode) => boolean)
  class?: (
    data: TreeNodeData,
    node: TreeNode
  ) => string | { [key: string]: boolean }
}
export type RenderContentFunction = (
  h: hType,
  context: RenderContentContext
) => VNode | VNode[]
export interface RenderContentContext {
  _self: ComponentInternalInstance
  node: TreeNode
  data: TreeNodeData
  store: TreeStore
}
export type AllowDragFunction = (node: TreeNode) => boolean
export type AllowDropType = 'inner' | 'prev' | 'next'
export type AllowDropFunction = (
  draggingNode: TreeNode,
  dropNode: TreeNode,
  type: AllowDropType
) => boolean
export type LoadFunction = (
  rootNode: TreeNode,
  loadedCallback: (data: TreeData) => void,
  stopLoading: () => void
) => void
export type FilterValue = any
export type FilterNodeMethodFunction = (
  value: FilterValue,
  data: TreeNodeData,
  child: TreeNode
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
