import Upload from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Upload.install = (app: App): void => {
  app.component(Upload.name, Upload)
}

const _Upload = Upload as SFCWithInstall<typeof Upload>

export default _Upload
export const ElUpload = _Upload
