import Slider from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Slider.install = (app: App): void => {
  app.component(Slider.name, Slider)
}

const _Slider = Slider as SFCWithInstall<typeof Slider>

export default _Slider
export const ElSlider = _Slider

export * from './src/slider.type'
