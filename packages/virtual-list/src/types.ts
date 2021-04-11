import type {
  CSSProperties,
  ComponentInternalInstance,
  ExtractPropTypes,
} from 'vue'

export type Instance = ComponentInternalInstance
export type StyleValue = string | CSSProperties | Array<StyleValue>
export type ScrollEvent = WheelEvent | MouseEvent

export type Alignment = 'auto' | 'smart' | 'center' | 'start' | 'end'
export type ItemSize = (idx: number) => number | number
export type Direction = 'ltr' | 'rtl'
export type LayoutDirection = 'horizontal' | 'vertical'
export type RTLOffsetType = 'negative' | 'positive-descending' | 'positive-ascending';

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
  cachedItems: Record<string, ListItem>
  estimatedItemSize: number
  lastVisitedIndex: number
  clearCacheAfterIndex: (idx: number, forceUpdate?: boolean) => void
}

export type ScrollDir = 'forwards' | 'backwards'

export type ListItemSizer<T, P> = (props: ExtractPropTypes<T>, index: number, initProps: P) => number

export type GetEstimatedTotalSize<T, P> = (props: ExtractPropTypes<T>, initProps: P) => number

export type GetOffset<T, P> = (
  props: ExtractPropTypes<T>,
  idx: number,
  alignment: Alignment,
  offset: number,
  initProps: P,
) => number

export type GetStartIndexForOffset<T, P> = (
  props: ExtractPropTypes<T>,
  offset: number,
  initProps: P,
) => number;

export type GetStopIndexForStartIndex<T, P> = (
  props: ExtractPropTypes<T>,
  startIndex: number,
  scrollOffset: number,
  initProps: P,
) => number;

export type InitPropsFunc<T> = <P extends ListCache>(props: ExtractPropTypes<T>, initProps: Instance) => P

export type ListConstructorProps<T, P extends InitPropsFunc<T> = InitPropsFunc<T>> = {
  name?: string
  getItemOffset: ListItemSizer<T, ReturnType<P>>
  getEstimatedTotalSize: GetEstimatedTotalSize<T, ReturnType<P>>
  getItemSize: ListItemSizer<T, ReturnType<P>>
  getOffset: GetOffset<T, ReturnType<P>>
  getStartIndexForOffset: GetStartIndexForOffset<T, ReturnType<P>>
  getStopIndexForStartIndex: GetStopIndexForStartIndex<T, ReturnType<P>>
  initCache: P
  clearCache: boolean
  validateProps: (props: ExtractPropTypes<T>) => void
}

export type ListExposes = {
  containerRef: HTMLElement
  innerRef: HTMLElement
  getItemStyleCache: CSSProperties
  scrollTo: (offset: number) => void
  scrollToItem: (idx: number, alignment: Alignment) => void
}
