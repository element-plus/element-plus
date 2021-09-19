import Carousel from './src/main.vue'
import CarouselItem from './src/item.vue'
import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel)
  app.component(CarouselItem.name, CarouselItem)
}

Carousel.CarouselItem = CarouselItem

const _Carousel = Carousel as any as SFCWithInstall<typeof Carousel> & {
  CarouselItem: typeof CarouselItem
}

export default _Carousel

export const ElCarousel = _Carousel
export const ElCarouselItem = CarouselItem
