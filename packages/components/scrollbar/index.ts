import Scrollbar from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Scrollbar.install = (app: App): void => {
  app.component(Scrollbar.name, Scrollbar)
}

const _Scrollbar = Scrollbar as SFCWithInstall<typeof Scrollbar>

export default _Scrollbar
export const ElScrollbar = _Scrollbar

export * from './src/util'
