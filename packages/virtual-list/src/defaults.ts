import { isNumber } from '@element-plus/utils/util'

import type { PropType } from 'vue'
import type { Direction, LayoutDirection, StyleValue, ItemSize } from './types'


export const DEFAULT_DYNAMIC_LIST_ITEM_SIZE = 50

export const ITEM_RENDER_EVT = 'item-rendered'
export const SCROLL_EVT = 'scroll'

export const FORWARD = 'forward'
export const BACKWARD = 'backward'

export const AUTO_ALIGNMENT = 'auto'
export const SMART_ALIGNMENT = 'smart'
export const START_ALIGNMENT = 'start'
export const CENTERED_ALIGNMENT = 'center'
export const END_ALIGNMENT = 'end'

export const HORIZONTAL = 'horizontal'
export const VERTICAL = 'vertical'

export const LTR = 'ltr'
export const RTL = 'rtl'

export const RTL_OFFSET_NAG = 'negative'
export const RTL_OFFSET_POS_ASC = 'positive-ascending'
export const RTL_OFFSET_POS_DESC = 'positive-descending'

export const DefaultListProps = {
  cache: {
    type: Number as PropType<number>,
    default: 2,
  },
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
  // even though we can use Enums here but due to the issue for some
  // intelligence plugin distinguishes string enums to strings
  // we had some code that uses enums but the plugins were quite
  // about that and reporting issues because of it.
  direction: {
    type: String as PropType<Direction>,
    default: 'ltr',
    validator: (val: Direction) => {
      return val === LTR || val === RTL
    },
  },
  estimatedItemSize: {
    type: [Number] as PropType<number>,
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    required: true,
  },
  layout: {
    type: String as PropType<LayoutDirection>,
    default: VERTICAL,
  },
  initScrollOffset: {
    type: Number,
    default: 0,
  },
  innerElement: {
    type: [String, Object],
    default: 'div',
  },
  total: {
    type: Number as PropType<number>,
    required: true,
  },
  itemSize: {
    type: [Number, Function] as PropType<number | ItemSize>,
    required: true,
  },
  style: {
    type: [Object, String, Array] as PropType<StyleValue>,
    default: () => ({}),
  },
  useIsScrolling: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [Number, String] as PropType<string | number>,
    required: true,
  },
}

export const DefaultGridProps = {
  className: DefaultListProps.className,
  columnCache: DefaultListProps.cache,
  columnWidth: DefaultListProps.itemSize,
  containerElement: DefaultListProps.containerElement,
  data: DefaultListProps.data,
  direction: DefaultListProps.direction,
  estimatedColumnWidth: DefaultListProps.estimatedItemSize,
  estimatedRowHeight: DefaultListProps.estimatedItemSize,
  height: {
    ...DefaultListProps.height,
    validator: (val: number) => isNumber(val),
  },
  initScrollLeft: DefaultListProps.initScrollOffset,
  initScrollTop: DefaultListProps.initScrollOffset,
  innerElement: DefaultListProps.innerElement,
  rowCache: DefaultListProps.cache,
  rowHeight: DefaultListProps.itemSize,
  style: DefaultListProps.style,
  useIsScrolling: DefaultListProps.useIsScrolling,
  width: {
    ...DefaultListProps.width,
    validator: (val: number) => {
      return isNumber(val)
    },
  },
  totalColumn: DefaultListProps.total,
  totalRow: DefaultListProps.total,
}

export const DefaultScrollBarProps = {
  layout: DefaultListProps.layout,
  total: Number,
  ratio: Number,
  clientSize: Number,
  scrollFrom: Number,
  visible: Boolean,
}

export const PageKey = {
  [HORIZONTAL]: 'pageX',
  [VERTICAL]: 'pageY',
}

export const ScrollbarSizeKey = {
  [HORIZONTAL]: 'height',
  [VERTICAL]: 'width',
}

export const ScrollbarDirKey = {
  [HORIZONTAL]: 'left',
  [VERTICAL]: 'top',
}

export const SCROLLBAR_MIN_SIZE = 20
