import type { InjectionKey, UnwrapRef, VNode } from 'vue'

export type Layout = 'horizontal' | 'vertical'

export type PanelItemState = UnwrapRef<{
  uid: number
  getVnode: () => VNode
  collapsible: { start?: boolean; end?: boolean }
  max?: number | string
  min?: number | string
  resizable: boolean
  size?: number | string
  // Whether the panel's *declared* size prop is a fixed pixel value, kept
  // separate from `size` (which useResize also overwrites with a live raw
  // px number while dragging/collapsing) so that value doesn't get mistaken
  // for an authored fixed size once it's just an internal snapshot.
  isFixedSize?: boolean
  // The literal pixel width an "Npx" panel is pinned to. Kept separate from
  // `size`, which holds the live value written during a drag or collapse.
  fixedPxSize?: number
  // Set only for a panel the user actually collapsed, so a pinned panel that
  // was merely squeezed to 0 by a neighbour still recovers its width.
  isCollapsed?: boolean
  // Whether the declared size prop always resolves to exactly 0 (e.g. "0%"),
  // in which case `min` - not `size` - is the meaningful floor to restore to.
  isZeroSize?: boolean
  setIndex: (val: number) => void
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
  onMoveEnd: (index: number) => Promise<void>
  onMoveStart: (index: number) => void
  onMoving: (index: number, offset: number) => void
}

export const splitterRootContextKey: InjectionKey<SplitterRootContext> = Symbol(
  'splitterRootContextKey'
)
