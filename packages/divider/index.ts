import Divider from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Divider.install = (app: App): void => {
  app.component(Divider.name, Divider)
}

const _Divider: SFCWithInstall<typeof Divider> = Divider

export default _Divider
