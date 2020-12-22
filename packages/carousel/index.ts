import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Carousel from './src/main.vue'

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel)
}

const _Carousel: SFCWithInstall<typeof Carousel> = Carousel

export default _Carousel
