import { isNumber } from '@element-plus/utils/util'
import { LTR, RTL, VERTICAL } from './defaults'

import type { ExtractPropTypes, PropType } from 'vue'
import type { StyleValue } from '@element-plus/utils/types'
import type { Direction, LayoutDirection, ItemSize } from './types'

const itemSize = {
  type: [Number, Function] as PropType<number | ItemSize>,
  required: true,
}

const estimatedItemSize = {
  type: [Number] as PropType<number>,
}

const cache = {
  type: Number as PropType<number>,
  default: 2,
}

const direction = {
  type: String as PropType<Direction>,
  default: 'ltr',
  validator: (val: Direction) => {
    return val === LTR || val === RTL
  },
}

const initScrollOffset = {
  type: Number,
  default: 0,
}

const total = {
  type: Number as PropType<number>,
  required: true,
}

const layout = {
  type: String as PropType<LayoutDirection>,
  default: VERTICAL,
}

export const virtualizedProps = {
  className: {
    type: String as PropType<string>,
    default: '',
  },

  containerElement: {
    type: [String, Object],
    default: 'div',
  },

  data: {
    type: [Array] as PropType<any[]>,
    default: () => [],
  },

  /**
   * @description controls the horizontal direction.
   */
  direction,

  height: {
    type: [String, Number] as PropType<string | number>,
    required: true,
    validator: isNumber,
  },

  innerElement: {
    type: [String, Object],
    default: 'div',
  },

  style: {
    type: [Object, String, Array] as PropType<StyleValue>,
  },

  useIsScrolling: {
    type: Boolean,
    default: false,
  },

  width: {
    type: [Number, String] as PropType<string | number>,
    required: true,
    validator: isNumber,
  },
  perfMode: {
    type: Boolean,
    default: true,
  },
}

export const virtualizedListProps = {
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
}

export const virtualizedGridProps = {
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
}

export const virtualizedScrollbarProps = {
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
}

export type VirtualizedProps = ExtractPropTypes<typeof virtualizedProps>
export type VirtualizedListProps = ExtractPropTypes<typeof virtualizedListProps>
export type VirtualizedGridProps = ExtractPropTypes<typeof virtualizedGridProps>

export type VirtualizedScrollbarProps = ExtractPropTypes<
  typeof virtualizedScrollbarProps
>
