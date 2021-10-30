import {
  buildProp,
  buildProps,
  definePropType,
  mutable,
} from '@element-plus/utils/props'
import { VERTICAL } from './defaults'

import type { ExtractPropTypes } from 'vue'
import type { StyleValue } from '@element-plus/utils/types'
import type { ItemSize } from './types'

const itemSize = buildProp({
  type: definePropType<number | ItemSize>([Number, Function]),
  required: true,
} as const)

const estimatedItemSize = buildProp({
  type: Number,
} as const)

const cache = buildProp({
  type: Number,
  default: 2,
} as const)

const direction = buildProp({
  type: String,
  values: ['ltr', 'rtl'],
  default: 'ltr',
} as const)

const initScrollOffset = buildProp({
  type: Number,
  default: 0,
} as const)

const total = buildProp({
  type: Number,
  required: true,
} as const)

const layout = buildProp({
  type: String,
  values: ['horizontal', 'vertical'],
  default: VERTICAL,
} as const)

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
    default: () => mutable([] as const),
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
    required: true,
  },

  perfMode: {
    type: Boolean,
    default: true,
  },
} as const)

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
} as const)

export const virtualizedGridProps = buildProps({
  columnCache: cache,
  columnWidth: itemSize,
  estimatedColumnWidth: estimatedItemSize,
  estimatedRowHeight: estimatedItemSize,
  initScrollLeft: initScrollOffset,
  initScrollTop: initScrollOffset,
  rowCache: cache,
  rowHeight: itemSize,
  totalColumn: total,
  totalRow: total,
  ...virtualizedProps,
} as const)

export const virtualizedScrollbarProps = buildProps({
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
  visible: Boolean,
} as const)

export type VirtualizedProps = ExtractPropTypes<typeof virtualizedProps>
export type VirtualizedListProps = ExtractPropTypes<typeof virtualizedListProps>
export type VirtualizedGridProps = ExtractPropTypes<typeof virtualizedGridProps>

export type VirtualizedScrollbarProps = ExtractPropTypes<
  typeof virtualizedScrollbarProps
>
