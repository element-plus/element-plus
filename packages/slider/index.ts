import { App } from 'vue'
import Slider from './src/index.vue'

export default (app: App): void => {
  app.component(Slider.name, Slider)
}
