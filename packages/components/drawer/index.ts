import Drawer from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Drawer.install = (app: App): void => {
  app.component(Drawer.name, Drawer)
}

const _Drawer = Drawer as SFCWithInstall<typeof Drawer>

export default _Drawer
export const ElDrawer = _Drawer
