import { buildProps } from '@element-plus/utils/props'
import { isNumber } from '@element-plus/utils/util'
import type { Ref, ToRefs, UnwrapRef, ExtractPropTypes } from 'vue'

export interface ICarouselItemProps {
  name: string
  label: string | number
  key: string
}

export interface ICarouselItemData {
  hover: boolean
  translate: number
  scale: number
  active: boolean
  ready: boolean
  inStage: boolean
  animating: boolean
}

export interface ICarouselProps {
  initialIndex: number
  height: string
  trigger: string
  autoplay: boolean
  interval: number
  indicatorPosition: string
  indicator: boolean
  arrow: string
  type: string
  loop: boolean
  direction: string
  pauseOnHover: boolean
}

export type UnionCarouselItemData = ICarouselItemProps &
  ToRefs<ICarouselItemData>

export interface CarouselItem extends UnionCarouselItemData {
  uid: number
  translateItem: (index: number, activeIndex: number, oldIndex: number) => void
}

export interface InjectCarouselScope {
  root: Ref<HTMLElement>
  direction: string
  type: string
  items: Ref<UnwrapRef<CarouselItem[]>>
  loop: boolean
  addItem: (item: CarouselItem) => void
  removeItem: (uid: number) => void
  setActiveItem: (index: number) => void
}

export const carouselProps = buildProps({
  initialIndex: {
    type: Number,
    default: 0,
  },
  height: { type: String, default: '' },
  trigger: {
    type: String,
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
  indicatorPosition: { type: String, default: '' },
  indicator: {
    type: Boolean,
    default: true,
  },
  arrow: {
    type: String,
    default: 'hover',
  },
  type: { type: String, default: '' },
  loop: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    default: 'horizontal',
    values: ['horizontal', 'vertical'],
  },
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
} as const)

export type CarouselProps = ExtractPropTypes<typeof carouselProps>

export const carouselEmits = {
  change: (current: number, prev: number) =>
    isNumber(current) && isNumber(prev),
}

export type CarouselEmits = typeof carouselEmits
