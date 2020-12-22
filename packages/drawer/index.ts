import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Drawer from './src/index.vue'

Drawer.install = (app: App): void => {
  app.component(Drawer.name, Drawer)
}

const _Drawer: SFCWithInstall<typeof Drawer> = Drawer

export default _Drawer
