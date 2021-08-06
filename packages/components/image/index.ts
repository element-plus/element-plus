import Image from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Image.install = (app: App): void => {
  app.component(Image.name, Image)
}

const _Image = Image as SFCWithInstall<typeof Image>

export default _Image
export const ElImage = _Image
