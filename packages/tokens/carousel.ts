import type { InjectionKey, Ref } from 'vue'

import type { CarouselItemProps } from '@element-plus/components/carousel'

export type CarouselItemStates = {
  hover: boolean
  translate: number
  scale: number
  active: boolean
  ready: boolean
  inStage: boolean
  animating: boolean
}

export type CarouselItemContext = {
  props: CarouselItemProps
  states: CarouselItemStates
  uid: number
  translateItem: (index: number, activeIndex: number, oldIndex?: number) => void
}

export type CarouselContext = {
  root: Ref<HTMLElement | undefined>
  items: Ref<CarouselItemContext[]>
  isCardType: Ref<boolean>
  isVertical: Ref<boolean>
  loop: boolean
  addItem: (item: CarouselItemContext) => void
  removeItem: (uid: number) => void
  setActiveItem: (index: number) => void
}

export const carouselContextKey: InjectionKey<CarouselContext> =
  Symbol('carouselContextKey')
