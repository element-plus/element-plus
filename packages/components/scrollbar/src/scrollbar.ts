import { buildProps, definePropType, isNumber } from '@element-plus/utils'
import { useAriaProps } from '@element-plus/hooks'

import type { ExtractPublicPropTypes, StyleValue } from 'vue'
import type Scrollbar from './scrollbar.vue'

export interface ScrollbarProps {
  /**
   * @description trigger distance(px)
   * @default 0
   */
  distance?: number
  /**
   * @description height of scrollbar
   * @default ''
   */
  height?: number | string
  /**
   * @description max height of scrollbar
   * @default ''
   */
  maxHeight?: number | string
  /**
   * @description whether to use the native scrollbar
   */
  native?: boolean
  /**
   * @description style of wrap
   * @default ''
   */
  wrapStyle?: StyleValue
  /**
   * @description class of wrap
   * @default ''
   */
  wrapClass?: string | string[]
  /**
   * @description class of view
   * @default ''
   */
  viewClass?: string | string[]
  /**
   * @description style of view
   * @default ''
   */
  viewStyle?: StyleValue
  /**
   * @description do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance
   */
  noresize?: boolean
  /**
   * @description element tag of the view
   * @default 'div'
   */
  tag?: keyof HTMLElementTagNameMap // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  /**
   * @description always show
   */
  always?: boolean
  /**
   * @description minimum size of scrollbar
   * @default 20
   */
  minSize?: number
  /**
   * @description Wrap tabindex
   * @default undefined
   */
  tabindex?: number | string
  /**
   * @description id of view
   */
  id?: string
  /**
   * @description role of view
   */
  role?: string
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel?: string
  /**
   * @description native `aria-orientation` attribute
   */
  ariaOrientation?: 'horizontal' | 'vertical'
}

/**
 * @deprecated Removed after 3.0.0, Use `ScrollbarProps` instead.
 */
export const scrollbarProps = buildProps({
  /**
   * @description trigger distance(px)
   */
  distance: {
    type: Number,
    default: 0,
  },
  /**
   * @description height of scrollbar
   */
  height: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description max height of scrollbar
   */
  maxHeight: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description whether to use the native scrollbar
   */
  native: Boolean,
  /**
   * @description style of wrap
   */
  wrapStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
  },
  /**
   * @description class of wrap
   * @default ''
   */
  wrapClass: {
    type: [String, Array],
    default: '',
  },
  /**
   * @description class of view
   */
  viewClass: {
    type: [String, Array],
    default: '',
  },
  /**
   * @description style of view
   */
  viewStyle: {
    type: [String, Array, Object],
    default: '',
  },
  /**
   * @description do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance
   */
  noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  /**
   * @description element tag of the view
   */
  tag: {
    type: String,
    default: 'div',
  },
  /**
   * @description always show
   */
  always: Boolean,
  /**
   * @description minimum size of scrollbar
   */
  minSize: {
    type: Number,
    default: 20,
  },
  /**
   * @description Wrap tabindex
   */
  tabindex: {
    type: [String, Number],
    default: undefined,
  },
  /**
   * @description id of view
   */
  id: String,
  /**
   * @description role of view
   */
  role: String,
  ...useAriaProps(['ariaLabel', 'ariaOrientation']),
} as const)
export type ScrollbarPropsPublic = ExtractPublicPropTypes<typeof scrollbarProps>

export const scrollbarEmits = {
  'end-reached': (direction: ScrollbarDirection) =>
    ['left', 'right', 'top', 'bottom'].includes(direction),
  scroll: ({
    scrollTop,
    scrollLeft,
  }: {
    scrollTop: number
    scrollLeft: number
  }) => [scrollTop, scrollLeft].every(isNumber),
}
export type ScrollbarEmits = typeof scrollbarEmits
export type ScrollbarDirection = 'top' | 'bottom' | 'left' | 'right'

export type ScrollbarInstance = InstanceType<typeof Scrollbar> & unknown
