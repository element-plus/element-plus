import type { CSSProperties, ComponentInternalInstance, Ref } from 'vue'

export type Instance = ComponentInternalInstance

export type Alignment = 'auto' | 'smart' | 'center' | 'start' | 'end'
export type ItemSize = (idx: number) => number
export type Direction = 'ltr' | 'rtl'
export type LayoutDirection = 'horizontal' | 'vertical'
export type RTLOffsetType =
  | 'negative'
  | 'positive-descending'
  | 'positive-ascending'

export type ItemProps<T> = {
  data: T
  style: CSSProperties
  scrolling?: boolean
  index: number
}

export type ListItem = {
  offset: number
  size: number
}

export type ListCache = {
  items: Record<string, ListItem>
  estimatedItemSize: number
  lastVisitedIndex: number
  clearCacheAfterIndex: (idx: number, forceUpdate?: boolean) => void
}

export type GridCache = {
  column: Record<string, ListItem>
  row: Record<string, ListItem>
  estimatedColumnWidth: number
  estimatedRowHeight: number
  lastVisitedColumnIndex: number
  lastVisitedRowIndex: number
}

export type ScrollDir = 'forwards' | 'backwards'

export type ListItemSizer<T, P extends InitListCacheFunc<T>> = (
  props: T,
  index: number,
  cache: ReturnType<P>
) => number

export type GetEstimatedTotalSize<
  T,
  P extends InitCacheFunc<T, GridCache | ListCache>
> = (props: T, cache: ReturnType<P>) => number

export type GetOffset<T, P extends InitListCacheFunc<T>> = (
  props: T,
  idx: number,
  alignment: Alignment,
  offset: number,
  cache: ReturnType<P>
) => number

export type GetStartIndexForOffset<
  T,
  P extends InitCacheFunc<T, GridCache | ListCache>
> = (props: T, offset: number, cache: ReturnType<P>) => number

export type GetStopIndexForStartIndex<
  T,
  P extends InitCacheFunc<T, GridCache | ListCache>
> = (
  props: T,
  startIndex: number,
  scrollOffset: number,
  cache: ReturnType<P>
) => number

export type PropValidator<T> = (props: T) => void

export type InitCacheFunc<T, P> = (props: T, cache: Instance) => P
export type InitListCacheFunc<T> = InitCacheFunc<T, ListCache>
export type InitGridCacheFunc<T> = InitCacheFunc<T, GridCache>

export type ListConstructorProps<
  T,
  P extends InitListCacheFunc<T> = InitListCacheFunc<T>
> = {
  name?: string
  getItemOffset: ListItemSizer<T, P>
  getEstimatedTotalSize: GetEstimatedTotalSize<T, P>
  getItemSize: ListItemSizer<T, P>
  getOffset: GetOffset<T, P>
  getStartIndexForOffset: GetStartIndexForOffset<T, P>
  getStopIndexForStartIndex: GetStopIndexForStartIndex<T, P>
  initCache: P
  clearCache: boolean
  validateProps: PropValidator<T>
}

export type ExposesStates = {
  isScrolling: boolean
  updateRequested: boolean
}

export type SharedExposes = {
  windowRef: Ref<HTMLElement>
  innerRef: Ref<HTMLElement>
  getItemStyleCache: (_: any, __: any, ___: any) => CSSProperties
}

export type ListExposes = {
  scrollTo: (offset: number) => void
  scrollToItem: (idx: number, alignment?: Alignment) => void
  states: {
    scrollDir: Direction
    scrollOffset: number
  } & ExposesStates
} & SharedExposes

export type GridExposes = {
  states: {
    scrollLeft: number
    scrollTop: number
    xAxisScrollDir: Direction
    yAxisScrollDir: Direction
  } & ExposesStates
  scrollTo: (props: { scrollLeft: number; scrollTop: number }) => void
  scrollToItem: (
    columnIndex?: number,
    rowIndex?: number,
    alignment?: Alignment
  ) => void
} & SharedExposes

export type ScrollbarExpose = {
  onMouseUp: () => void
}

export type GetGridOffset<T, P extends InitGridCacheFunc<T>> = (
  props: T,
  index: number,
  alignment: Alignment,
  offset: number,
  cache: ReturnType<P>,
  scrollbarWidth: number
) => number

export type GetPosition<T, P extends InitGridCacheFunc<T>> = (
  props: T,
  index: number,
  cache: ReturnType<P>
) => [number, number]

export type GridConstructorProps<
  T,
  P extends InitGridCacheFunc<T> = InitGridCacheFunc<T>
> = {
  name?: string
  // columns getter
  getColumnOffset: GetGridOffset<T, P>
  getColumnPosition: GetPosition<T, P>
  getColumnStartIndexForOffset: GetStartIndexForOffset<T, P>
  getColumnStopIndexForStartIndex: GetStopIndexForStartIndex<T, P>

  // grid meta getter
  getEstimatedTotalHeight: GetEstimatedTotalSize<T, P>
  getEstimatedTotalWidth: GetEstimatedTotalSize<T, P>

  // row getter
  getRowOffset: GetGridOffset<T, P>
  getRowPosition: GetPosition<T, P>
  getRowStartIndexForOffset: GetStartIndexForOffset<T, P>
  getRowStopIndexForStartIndex: GetStopIndexForStartIndex<T, P>

  // configs
  initCache: P
  injectToInstance?: (instance: Instance, cache: Ref<ReturnType<P>>) => void
  clearCache: boolean
  validateProps: PropValidator<T>
}

/**
 * Instance methods and emits
 */
export type GridDefaultSlotParams = {
  columnIndex: number
  rowIndex: number
  data: any
  key: number | string
  isScrolling?: boolean
  style: CSSProperties
}

export type GridItemRenderedEvtParams = {
  columnCacheStart: number
  columnCacheEnd: number
  rowCacheStart: number
  rowCacheEnd: number
  columnVisibleStart: number
  columnVisibleEnd: number
  rowVisibleStart: number
  rowVisibleEnd: number
}

export type GridScrollOptions = { scrollLeft?: number; scrollTop?: number }

export type GridItemKeyGetter = <
  T extends { [key: string | number]: any }
>(args: {
  columnIndex: number
  data: T
  rowIndex: number
}) => string | number
