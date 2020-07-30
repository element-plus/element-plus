import { App } from 'vue'
import Carousel from './src/index.vue'
export default (app: App): void => {
  app.component(Carousel.name, Carousel)
}
