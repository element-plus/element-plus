import type { InjectionKey, VNode } from 'vue'
import type { Nullable } from '@element-plus/utils'
import type { default as CascaderNode } from './node'

export type { CascaderNode, Nullable }
export type CascaderNodeValue = string | number | Record<string, any>
export type CascaderNodePathValue = CascaderNodeValue[]
export type CascaderValue =
  | CascaderNodeValue
  | CascaderNodePathValue
  | (CascaderNodeValue | CascaderNodePathValue)[]
export type CascaderConfig = Required<CascaderProps>
export type ExpandTrigger = 'click' | 'hover'
export type isDisabled = (data: CascaderOption, node: CascaderNode) => boolean
export type isLeaf = (data: CascaderOption, node: CascaderNode) => boolean
export type Resolve = (dataList?: CascaderOption[]) => void
export type LazyLoad = (node: CascaderNode, resolve: Resolve) => void
export interface RenderLabelProps {
  node: CascaderNode
  data: CascaderOption
}
export type RenderLabel = (props: RenderLabelProps) => VNode | VNode[]
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
  checkOnClickNode?: boolean
  checkOnClickLeaf?: boolean
  showPrefix?: boolean
}

export interface Tag {
  node?: CascaderNode
  key: number
  text: string
  hitState?: boolean
  closable: boolean
  isCollapseTag: boolean
}

export interface ElCascaderPanelContext {
  config: CascaderConfig
  expandingNode: CascaderNode | undefined
  checkedNodes: CascaderNode[]
  isHoverMenu: boolean
  initialLoaded: boolean
  renderLabelFn?: RenderLabel
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
