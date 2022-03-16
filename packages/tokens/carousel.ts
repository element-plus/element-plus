import type { InjectionKey, Ref, ToRefs, UnwrapRef } from 'vue'

import type { CarouselItemProps } from '@element-plus/components/carousel'

export type CarouselItemContext = CarouselItemProps &
  ToRefs<{
    hover: boolean
    translate: number
    scale: number
    active: boolean
    ready: boolean
    inStage: boolean
    animating: boolean
  }> & {
    uid: number | undefined
    translateItem: (
      index: number,
      activeIndex: number,
      oldIndex: number
    ) => void
  }

export type CarouselContext = {
  root: Ref<HTMLElement | undefined>
  direction: string
  type: string
  items: Ref<UnwrapRef<CarouselItemContext[]>>
  loop: boolean
  addItem: (item: CarouselItemContext) => void
  removeItem: (uid: number | undefined) => void
  setActiveItem: (index: number) => void
}

export const carouselContextKey: InjectionKey<CarouselContext> =
  Symbol('carouselContextKey')
