import { splitterPanelProps } from '@element-plus/components'

import type { ExtractPropTypes, InjectionKey, UnwrapRef, VNode } from 'vue'

export type Layout = 'horizontal' | 'vertical'

export type PanelItemState = UnwrapRef<{
  uid: number
  getVnode: () => VNode
  el: HTMLElement
  collapsible: { start?: boolean; end?: boolean }
  max?: number | string
  min?: number | string
  resizable: boolean
  size?: number | string
  setIndex: (val: number) => void
  props: ExtractPropTypes<typeof splitterPanelProps>
}>

export interface SplitterRootContext {
  panels: PanelItemState[]
  layout: Layout
  lazy: boolean
  containerSize: number
  movingIndex: { index: number; confirmed: boolean } | null
  percentSizes: number[]
  pxSizes: number[]
  registerPanel: (pane: PanelItemState) => void
  unregisterPanel: (pane: PanelItemState) => void
  onCollapse: (index: number, type: 'start' | 'end') => void
  onMoveEnd: () => void
  onMoveStart: (index: number) => void
  onMoving: (index: number, offset: number) => void
}

export const splitterRootContextKey: InjectionKey<SplitterRootContext> = Symbol(
  'splitterRootContextKey'
)

export enum PanelSizeFlags {
  // size equal or small than max size
  // eslint-disable-next-line unicorn/prefer-math-trunc
  MIN = 1 << 0,
  // size equal or large than max size
  MAX = 1 << 1,
  // size not match old size
  MUTATED = 1 << 2,
  // have prop size
  SIZED = 1 << 3,
  // size not match prop size
  NOT_MATCH_SIZED = 1 << 4,
}
