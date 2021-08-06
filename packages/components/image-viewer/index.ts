import ImageViewer from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

ImageViewer.install = (app: App): void => {
  app.component(ImageViewer.name, ImageViewer)
}

const _ImageViewer: SFCWithInstall<typeof ImageViewer> = ImageViewer

export default _ImageViewer
export const ElImageViewer = _ImageViewer
