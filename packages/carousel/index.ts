import { App } from 'vue'
import Carousel from './src/main.vue'
import CarouselItem from './src/item.vue'
export default (app: App): void => {
  app.component(Carousel.name, Carousel)
  app.component(CarouselItem.name, CarouselItem)
}
