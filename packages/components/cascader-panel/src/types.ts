import type { InjectionKey } from 'vue'
import type {
  CascaderConfig,
  default as CascaderNode,
  CascaderOption,
  RenderLabel,
} from './node'

export type * from './node'
export type { CascaderNode }

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
