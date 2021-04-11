import type { PropType } from 'vue'

import type { Direction, LayoutDirection, StyleValue, ItemSize } from './types'

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
  // even though we can use Enums here but due to the issue for some
  // intelligence plugin distinguishes string enums to strings
  // we had some code that uses enums but the plugins were quite
  // about that and reporting issues because of it.
  direction: {
    type: String as PropType<Direction>,
    default: 'ltr',
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
    default: 'vertical',
  },
  itemData: {
    type: Object as PropType<any>,
    default: () => undefined,
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
