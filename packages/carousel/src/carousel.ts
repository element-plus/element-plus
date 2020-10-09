import { Ref, ToRefs, UnwrapRef } from 'vue'

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
}

export type UnionCarouselItemData = ICarouselItemProps & ToRefs<ICarouselItemData>
export interface CarouselItem extends UnionCarouselItemData {
  uid: number
  translateItem: (index: number, activeIndex: number, oldIndex: number) => void
}

export interface InjectCarouselScope {
  direction: string
  offsetWidth: Ref<number>
  offsetHeight: Ref<number>
  type: string
  items: Ref<UnwrapRef<CarouselItem[]>>
  loop: boolean
  updateItems: (item: CarouselItem) => void
  setActiveItem: (index: number) => void
}
