import { IconPropType } from '@element-plus/utils'

import type {
  ComponentInternalInstance,
  ExtractPublicPropTypes,
  SetupContext,
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
  class?:
    | ((
        data: TreeNodeData,
        node: TreeNode
      ) => string | { [key: string]: boolean })
    | string
}

export interface TreeProps {
  data?: TreeData
  emptyText?: string
  height?: number
  props?: TreeOptionProps
  highlightCurrent?: boolean
  showCheckbox?: boolean
  defaultCheckedKeys?: TreeKey[]
  // Whether checked state of a node not affects its father and
  // child nodes when show-checkbox is true
  checkStrictly?: boolean
  defaultExpandedKeys?: TreeKey[]
  indent?: number
  itemSize?: number
  icon?: IconPropType
  expandOnClickNode?: boolean
  checkOnClickNode?: boolean
  checkOnClickLeaf?: boolean
  currentNodeKey?: string | number
  // TODO need to optimization
  accordion?: boolean
  filterMethod?: FilterMethod
  // Performance mode will increase memory usage, but scrolling will be smoother
  perfMode?: boolean
  /**
   * @description always show scrollbar
   */
  scrollbarAlwaysOn?: boolean
}

export interface TreeNodeProps {
  node?: TreeNode
  expanded?: boolean
  checked?: boolean
  indeterminate?: boolean
  showCheckbox?: boolean
  disabled?: boolean
  current?: boolean
  hiddenExpandIcon?: boolean
  itemSize?: number
}

export interface TreeNodeContentProps {
  node?: TreeNode
}

/**
 * @deprecated Removed after 3.0.0, Use `TreeProps` instead.
 */
export type TreePropsPublic = ExtractPublicPropTypes<typeof treeProps>

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
  isEffectivelyChecked?: boolean
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
