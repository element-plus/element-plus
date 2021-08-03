
import type { InjectionKey } from 'vue'
import type {
  default as CascaderNode,
  RenderLabel,
  CascaderConfig,
  CascaderOption,
} from './node'

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
  renderLabelFn: RenderLabel
  lazyLoad: (node?: CascaderNode, cb?: (dataList: CascaderOption[]) => void) => void
  expandNode: (node: CascaderNode, silent?: boolean) => void
  handleCheckChange: (node: CascaderNode, checked: boolean, emitClose?: boolean) => void
}

export const CASCADER_PANEL_INJECTION_KEY: InjectionKey<ElCascaderPanelContext> = Symbol()
