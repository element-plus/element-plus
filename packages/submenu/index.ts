import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Submenu from '../menu/src/submenu.vue'

Submenu.install = (app: App): void => {
  app.component(Submenu.name, Submenu)
}

const _Submenu: SFCWithInstall<typeof Submenu> = Submenu

export default _Submenu
