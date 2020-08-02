import { App } from 'vue'
import CarouselItem from './src/index.vue'
export default (app: App): void => {
  app.component(CarouselItem.name, CarouselItem)
}
