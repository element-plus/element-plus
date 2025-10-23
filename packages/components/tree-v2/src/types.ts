import type {
  ComponentInternalInstance,
  ExtractPropTypes,
  SetupContext,
  __ExtractPublicPropTypes,
} from 'vue'
import type { treeEmits, treeProps } from './virtual-tree'

export type TreeV2NodeData = Record<string, any>

export type TreeV2Data = TreeV2NodeData[]

export type TreeV2Key = string | number

export interface TreeV2OptionProps {
  children?: string
  label?: string
  value?: string
  disabled?: string
  class?: (
    data: TreeV2NodeData,
    node: TreeV2Node
  ) => string | { [key: string]: boolean }
}

export type TreeV2Props = ExtractPropTypes<typeof treeProps>
export type TreeV2PropsPublic = __ExtractPublicPropTypes<typeof treeProps>

export interface TreeV2Node {
  key: TreeV2Key
  level: number
  parent?: TreeV2Node
  children?: TreeV2Node[]
  data: TreeV2NodeData
  disabled?: boolean
  label?: string
  isLeaf?: boolean
  expanded?: boolean
}

export interface TreeV2Context {
  ctx: Omit<SetupContext<typeof treeEmits>, 'expose' | 'attrs'>
  instance: ComponentInternalInstance
  props: TreeV2Props
}

export interface TreeV2 {
  treeNodeMap: Map<TreeV2Key, TreeV2Node>
  levelTreeNodeMap: Map<number, TreeV2Node[]>
  treeNodes: TreeV2Node[]
  maxLevel: number
}

export type FilterMethod = (
  query: string,
  data: TreeV2NodeData,
  node: TreeV2Node
) => boolean

export interface CheckedInfo {
  checkedKeys: TreeV2Key[]
  checkedNodes: TreeV2Data
  halfCheckedKeys: TreeV2Key[]
  halfCheckedNodes: TreeV2Data
}
