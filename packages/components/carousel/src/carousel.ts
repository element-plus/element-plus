import { buildProps, isNumber } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'

export interface CarouselProps {
  /**
   * @description index of the initially active slide (starting from 0)
   */
  initialIndex?: number
  /**
   * @description height of the carousel
   */
  height?: string
  /**
   * @description how indicators are triggered
   */
  trigger?: 'hover' | 'click'
  /**
   * @description whether automatically loop the slides
   */
  autoplay?: boolean
  /**
   * @description interval of the auto loop, in milliseconds
   */
  interval?: number
  /**
   * @description position of the indicators
   */
  indicatorPosition?: '' | 'none' | 'outside'
  /**
   * @description when arrows are shown
   */
  arrow?: 'always' | 'hover' | 'never'
  /**
   * @description type of the Carousel
   */
  type?: '' | 'card'
  /**
   * @description when type is card, scaled size of secondary cards
   */
  cardScale?: number
  /**
   * @description display the items in loop
   */
  loop?: boolean
  /**
   * @description display direction
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * @description pause autoplay when hover
   */
  pauseOnHover?: boolean
  /**
   * @description infuse dynamism and smoothness into the carousel
   */
  motionBlur?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `CarouselProps` instead.
 */
export const carouselProps = buildProps({
  /**
   * @description index of the initially active slide (starting from 0)
   */
  initialIndex: {
    type: Number,
    default: 0,
  },
  /**
   * @description height of the carousel
   */
  height: {
    type: String,
    default: '',
  },
  /**
   * @description how indicators are triggered
   */
  trigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
  /**
   * @description whether automatically loop the slides
   */
  autoplay: {
    type: Boolean,
    default: true,
  },
  /**
   * @description interval of the auto loop, in milliseconds
   */
  interval: {
    type: Number,
    default: 3000,
  },
  /**
   * @description position of the indicators
   */
  indicatorPosition: {
    type: String,
    values: ['', 'none', 'outside'],
    default: '',
  },
  /**
   * @description when arrows are shown
   */
  arrow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: 'hover',
  },
  /**
   * @description type of the Carousel
   */
  type: {
    type: String,
    values: ['', 'card'],
    default: '',
  },
  /**
   * @description when type is card, scaled size of secondary cards
   */
  cardScale: {
    type: Number,
    default: 0.83,
  },
  /**
   * @description display the items in loop
   */
  loop: {
    type: Boolean,
    default: true,
  },
  /**
   * @description display direction
   */
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  /**
   * @description pause autoplay when hover
   */
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
  /**
   * @description infuse dynamism and smoothness into the carousel
   */
  motionBlur: Boolean,
} as const)

export const carouselEmits = {
  /**
   * @description triggers when the active slide switches
   * @param current index of the new active slide
   * @param prev index of the old active slide
   */
  change: (current: number, prev: number) => [current, prev].every(isNumber),
}

/**
 * @deprecated Removed after 3.0.0, Use `CarouselProps` instead.
 */
export type CarouselPropsPublic = ExtractPublicPropTypes<typeof carouselProps>
export type CarouselEmits = typeof carouselEmits

export const carouselPropsDefaults = {
  initialIndex: 0,
  height: '',
  trigger: 'hover',
  autoplay: true,
  interval: 3000,
  indicatorPosition: '',
  arrow: 'hover',
  type: '',
  cardScale: 0.83,
  loop: true,
  direction: 'horizontal',
  pauseOnHover: true,
} as const
