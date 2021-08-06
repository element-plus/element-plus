import Image from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Image.install = (app: App): void => {
  app.component(Image.name, Image)
}

const _Image: SFCWithInstall<typeof Image> = Image

export default _Image
export const ElImage = _Image
