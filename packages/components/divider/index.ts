import Divider from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Divider.install = (app: App): void => {
  app.component(Divider.name, Divider)
}

const _Divider = Divider as SFCWithInstall<typeof Divider>

export default _Divider
export const ElDivider = _Divider
