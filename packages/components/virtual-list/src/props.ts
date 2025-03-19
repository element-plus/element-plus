import { buildProp, buildProps, definePropType } from '@element-plus/utils'
import { VERTICAL } from './defaults'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type { GridItemKeyGetter, ItemSize } from './types'

const itemSize = buildProp({
  type: definePropType<number | ItemSize>([Number, Function]),
  required: true,
})

const estimatedItemSize = buildProp({ type: Number })

const cache = buildProp({
  type: Number,
  default: 2,
})

const direction = buildProp({
  type: String,
  values: ['ltr', 'rtl'],
  default: 'ltr',
})

const initScrollOffset = buildProp({
  type: Number,
  default: 0,
})

const total = buildProp({
  type: Number,
  required: true,
})

const layout = buildProp({
  type: String,
  values: ['horizontal', 'vertical'],
  default: VERTICAL,
})

export const virtualizedProps = buildProps({
  className: {
    type: String,
    default: '',
  },

  containerElement: {
    type: definePropType<string | Element>([String, Object]),
    default: 'div',
  },

  data: {
    type: definePropType<any[]>(Array),
    default: () => [],
  },

  /**
   * @description controls the horizontal direction.
   */
  direction,

  height: {
    type: [String, Number],
    required: true,
  },

  innerElement: {
    type: [String, Object],
    default: 'div',
  },

  style: {
    type: definePropType<StyleValue>([Object, String, Array]),
  },

  useIsScrolling: {
    type: Boolean,
    default: false,
  },

  width: {
    type: [Number, String],
    required: false,
  },

  perfMode: {
    type: Boolean,
    default: true,
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false,
  },
})

export const virtualizedListProps = buildProps({
  /**
   * @description describes how many items should be pre rendered to the head
   * and the tail of the window
   */
  cache,

  estimatedItemSize,

  /**
   * @description controls the list's orientation
   */
  layout,

  initScrollOffset,

  /**
   * @description describes the total number of the list.
   */
  total,

  itemSize,
  ...virtualizedProps,
})

const scrollbarSize = buildProp({
  type: Number,
  default: 6,
})

const startGap = buildProp({ type: Number, default: 0 })
const endGap = buildProp({ type: Number, default: 2 })

export const virtualizedGridProps = buildProps({
  columnCache: cache,
  columnWidth: itemSize,
  estimatedColumnWidth: estimatedItemSize,
  estimatedRowHeight: estimatedItemSize,
  initScrollLeft: initScrollOffset,
  initScrollTop: initScrollOffset,
  itemKey: {
    type: definePropType<GridItemKeyGetter>(Function),
    default: ({
      columnIndex,
      rowIndex,
    }: {
      columnIndex: number
      rowIndex: number
    }) => `${rowIndex}:${columnIndex}`,
  },
  rowCache: cache,
  rowHeight: itemSize,
  totalColumn: total,
  totalRow: total,
  hScrollbarSize: scrollbarSize,
  vScrollbarSize: scrollbarSize,
  scrollbarStartGap: startGap,
  scrollbarEndGap: endGap,
  role: String,
  ...virtualizedProps,
})

export const virtualizedScrollbarProps = buildProps({
  alwaysOn: Boolean,
  class: String,
  layout,
  total,
  ratio: {
    type: Number,
    required: true,
  },
  clientSize: {
    type: Number,
    required: true,
  },
  scrollFrom: {
    type: Number,
    required: true,
  },
  scrollbarSize,
  startGap,
  endGap,

  visible: Boolean,
})

export type VirtualizedProps = ExtractPropTypes<typeof virtualizedProps>
export type VirtualizedListProps = ExtractPropTypes<typeof virtualizedListProps>
export type VirtualizedGridProps = ExtractPropTypes<typeof virtualizedGridProps>

export type VirtualizedScrollbarProps = ExtractPropTypes<
  typeof virtualizedScrollbarProps
>
