import { App } from 'vue'
import CarouselItem from '../carousel/src/item.vue'

CarouselItem.install = (app: App): void => {
  app.component(CarouselItem.name, CarouselItem)
}

export default CarouselItem
