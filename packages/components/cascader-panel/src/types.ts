import type { VNode, InjectionKey } from 'vue'
import type { Nullable } from '@element-plus/utils-v2'
import type { default as CascaderNode } from './node'

export type { CascaderNode }

export type CascaderNodeValue = string | number
export type CascaderNodePathValue = CascaderNodeValue[]
export type CascaderValue =
  | CascaderNodeValue
  | CascaderNodePathValue
  | (CascaderNodeValue | CascaderNodePathValue)[]
export type CascaderConfig = Required<CascaderProps>
export type isDisabled = (data: CascaderOption, node: CascaderNode) => boolean
export type isLeaf = (data: CascaderOption, node: CascaderNode) => boolean
export type Resolve = (dataList?: CascaderOption[]) => void
export type LazyLoad = (node: CascaderNode, resolve: Resolve) => void
export type RenderLabel = ({
  node: CascaderNode,
  data: CascaderOption,
}) => VNode | VNode[]

export enum ExpandTrigger {
  CLICK = 'click',
  HOVER = 'hover',
}

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

export interface Tag {
  node?: CascaderNode
  key: number
  text: string
  hitState?: boolean
  closable: boolean
}

export interface ElCascaderPanelContext {
  config: CascaderConfig
  expandingNode: Nullable<CascaderNode>
  checkedNodes: CascaderNode[]
  isHoverMenu: boolean
  initialLoaded: boolean
  renderLabelFn: RenderLabel
  lazyLoad: (
    node?: CascaderNode,
    cb?: (dataList: CascaderOption[]) => void
  ) => void
  expandNode: (node: CascaderNode, silent?: boolean) => void
  handleCheckChange: (
    node: CascaderNode,
    checked: boolean,
    emitClose?: boolean
  ) => void
}

export const CASCADER_PANEL_INJECTION_KEY: InjectionKey<ElCascaderPanelContext> =
  Symbol()
