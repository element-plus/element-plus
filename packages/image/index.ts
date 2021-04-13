import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Image from './src/index.vue'

Image.install = (app: App): void => {
  app.component(Image.name, Image)
}

const _Image: SFCWithInstall<typeof Image> = Image

export default _Image
