import type { InjectionKey, UnwrapRef } from 'vue'

export type Layout = 'horizontal' | 'vertical'

export type PanelItemState = UnwrapRef<{
  uid: number
  el: HTMLElement
  collapsible: { start?: boolean; end?: boolean }
  max?: number | string
  min?: number | string
  resizable: boolean
  size?: number | string
  setIndex: (val: number) => void
}>

export interface SplitterRootContext {
  panels: PanelItemState[]
  layout: Layout
  containerSize: number
  movingIndex: { index: number; confirmed: boolean } | null
  percentSizes: number[]
  pxSizes: number[]
  registerPanel: (pane: PanelItemState) => void
  sortPanel: (pane: PanelItemState) => void
  unregisterPanel: (uid: number) => void
  onCollapse: (index: number, type: 'start' | 'end') => void
  onMoveEnd: () => void
  onMoveStart: (index: number) => void
  onMoving: (index: number, offset: number) => void
}

export const splitterRootContextKey: InjectionKey<SplitterRootContext> = Symbol(
  'splitterRootContextKey'
)
