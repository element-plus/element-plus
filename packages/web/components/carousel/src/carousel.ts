import { buildProps, isNumber } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type Carousel from './carousel.vue'

export const carouselProps = buildProps({
  initialIndex: {
    type: Number,
    default: 0,
  },
  height: {
    type: String,
    default: '',
  },
  trigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 3000,
  },
  indicatorPosition: {
    type: String,
    values: ['', 'none', 'outside'],
    default: '',
  },
  indicator: {
    type: Boolean,
    default: true,
  },
  arrow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: 'hover',
  },
  type: {
    type: String,
    values: ['', 'card'],
    default: '',
  },
  loop: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
} as const)

export const carouselEmits = {
  change: (current: number, prev: number) => [current, prev].every(isNumber),
}

export type CarouselProps = ExtractPropTypes<typeof carouselProps>
export type CarouselEmits = typeof carouselEmits

export type CarouselInstance = InstanceType<typeof Carousel>
