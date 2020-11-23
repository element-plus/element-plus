import { App } from 'vue'
import Slider from './src/index.vue'

Slider.install = (app: App): void => {
  app.component(Slider.name, Slider)
}

export default Slider
