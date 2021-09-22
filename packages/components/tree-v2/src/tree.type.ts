import type {
  ComponentInternalInstance,
  SetupContext,
  ExtractPropTypes,
} from 'vue'
import type { treeProps } from './virtual-tree'

export declare interface TreeNodeData {
  [key: string]: any
}
export declare type TreeData = TreeNodeData[]

export declare type TreeKey = string | number

export declare interface TreeOptionProps {
  children?: string
  label?: string
  value?: string
  disabled?: string
}

export declare type TreeProps = ExtractPropTypes<typeof treeProps>

export interface TreeNode {
  key: TreeKey
  level: number
  parent?: TreeNode | null
  children?: TreeNode[]
  data: TreeNodeData
  disabled?: boolean
  label?: string
  isLeaf?: boolean
}

export interface RootTreeType {
  ctx: SetupContext<any>
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
