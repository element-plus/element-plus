import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import ImageViewer from './src/index.vue'

ImageViewer.install = (app: App): void => {
  app.component(ImageViewer.name, ImageViewer)
}

const _ImageViewer: SFCWithInstall<typeof ImageViewer> = ImageViewer

export default _ImageViewer
