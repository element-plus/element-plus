import { buildProps, definePropType, mutable } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Col from './col.vue'

export type ColSizeObject = {
  span?: number
  offset?: number
  pull?: number
  push?: number
}
export type ColSize = number | ColSizeObject

export interface ColProps {
  /**
   * @description custom element tag
   */
  tag?: string
  /**
   * @description number of column the grid spans
   */
  span?: number
  /**
   * @description number of spacing on the left side of the grid
   */
  offset?: number
  /**
   * @description number of columns that grid moves to the left
   */
  pull?: number
  /**
   * @description number of columns that grid moves to the right
   */
  push?: number
  /**
   * @description `<768px` Responsive columns or column props object
   */
  xs?: ColSize
  /**
   * @description `≥768px` Responsive columns or column props object
   */
  sm?: ColSize
  /**
   * @description `≥992px` Responsive columns or column props object
   */
  md?: ColSize
  /**
   * @description `≥1200px` Responsive columns or column props object
   */
  lg?: ColSize
  /**
   * @description `≥1920px` Responsive columns or column props object
   */
  xl?: ColSize
}

/**
 * @deprecated Removed after 3.0.0, Use `ColProps` instead.
 */
export const colProps = buildProps({
  /**
   * @description custom element tag
   */
  tag: {
    type: String,
    default: 'div',
  },
  /**
   * @description number of column the grid spans
   */
  span: {
    type: Number,
    default: 24,
  },
  /**
   * @description number of spacing on the left side of the grid
   */
  offset: {
    type: Number,
    default: 0,
  },
  /**
   * @description number of columns that grid moves to the left
   */
  pull: {
    type: Number,
    default: 0,
  },
  /**
   * @description number of columns that grid moves to the right
   */
  push: {
    type: Number,
    default: 0,
  },
  /**
   * @description `<768px` Responsive columns or column props object
   */
  xs: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
  /**
   * @description `≥768px` Responsive columns or column props object
   */
  sm: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
  /**
   * @description `≥992px` Responsive columns or column props object
   */
  md: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
  /**
   * @description `≥1200px` Responsive columns or column props object
   */
  lg: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
  /**
   * @description `≥1920px` Responsive columns or column props object
   */
  xl: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `ColProps` instead.
 */
export type ColPropsPublic = ExtractPublicPropTypes<typeof colProps>
export type ColInstance = InstanceType<typeof Col> & unknown
