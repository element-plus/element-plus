import type {
  ComponentInternalInstance,
  SetupContext,
  ExtractPropTypes,
} from 'vue'
import type { treeProps, treeEmits } from './virtual-tree'

export type TreeNodeData = Record<string, any>

export type TreeData = TreeNodeData[]

export type TreeKey = string | number

export interface TreeOptionProps {
  children?: string
  label?: string
  value?: string
  disabled?: string
}

export type TreeProps = ExtractPropTypes<typeof treeProps>

export interface TreeNode {
  key: TreeKey
  level: number
  parent?: TreeNode
  children?: TreeNode[]
  data: TreeNodeData
  disabled?: boolean
  label?: string
  isLeaf?: boolean
}

export interface TreeContext {
  ctx: SetupContext<typeof treeEmits>
  instance: ComponentInternalInstance
  props: TreeProps
}

export interface Tree {
  treeNodeMap: Map<TreeKey, TreeNode>
  levelTreeNodeMap: Map<number, TreeNode[]>
  treeNodes: TreeNode[]
  maxLevel: number
}

export type FilterMethod = (query: string, node: TreeNodeData) => boolean

export interface CheckedInfo {
  checkedKeys: TreeKey[]
  checkedNodes: TreeData
  halfCheckedKeys: TreeKey[]
  halfCheckedNodes: TreeData
}
