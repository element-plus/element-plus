import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Slider from './src/index.vue'

Slider.install = (app: App): void => {
  app.component(Slider.name, Slider)
}

const _Slider: SFCWithInstall<typeof Slider> = Slider

export default _Slider
