export type Layout = 'horizontal' | 'vertical'

export interface PanelItem {
  min?: number | string
  max?: number | string
  size?: number | string
  defaultSize?: number | string
  el: HTMLElement
  index: number
  uid: number
  resizable: boolean
  collapsible: { start?: boolean; end?: boolean }
}

export interface PanelContext {
  panels: PanelItem[]
  panelsMap: Record<number, PanelItem>
  percentSizes: number[]
  pxSizes: number[]
  layout: Layout
  movingIndex: { index: number; confirmed: boolean } | null
  containerSize: number
  onMoveStart: (index: number) => void
  onMoving: (index: number, offset: number) => void
  onMoveEnd: () => void
  onCollapse: (index: number, type: 'start' | 'end') => void
}
