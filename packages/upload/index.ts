import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Upload from './src/index.vue'

Upload.install = (app: App): void => {
  app.component(Upload.name, Upload)
}

const _Upload: SFCWithInstall<typeof Upload> = Upload

export default _Upload
