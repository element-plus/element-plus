import type {
  ComponentInternalInstance,
  ExtractPropTypes,
  SetupContext,
  __ExtractPublicPropTypes,
} from 'vue'
import type { treeEmits, treeProps } from './virtual-tree'

export type TreeNodeData = Record<string, any>

export type TreeData = TreeNodeData[]

export type TreeKey = string | number

export interface TreeOptionProps {
  children?: string
  label?: string
  value?: string
  disabled?: string
  class?: (
    data: TreeNodeData,
    node: TreeNode
  ) => string | { [key: string]: boolean }
}

export type TreeProps = ExtractPropTypes<typeof treeProps>
export type TreePropsPublic = __ExtractPublicPropTypes<typeof treeProps>

export interface TreeNode {
  key: TreeKey
  level: number
  parent?: TreeNode
  children?: TreeNode[]
  data: TreeNodeData
  disabled?: boolean
  label?: string
  isLeaf?: boolean
  expanded?: boolean

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
  allWithoutDisable?: boolean
}

export interface TreeContext {
  ctx: Omit<SetupContext<typeof treeEmits>, 'expose' | 'attrs'>
  instance: ComponentInternalInstance
  props: TreeProps
}

export interface Tree {
  treeNodeMap: Map<TreeKey, TreeNode>
  levelTreeNodeMap: Map<number, TreeNode[]>
  treeNodes: TreeNode[]
  maxLevel: number
}

export type FilterMethod = (
  query: string,
  data: TreeNodeData,
  node: TreeNode
) => boolean

export interface CheckedInfo {
  checkedKeys: TreeKey[]
  checkedNodes: TreeData
  halfCheckedKeys: TreeKey[]
  halfCheckedNodes: TreeData
}
