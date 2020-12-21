import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Submenu from '../menu/src/submenu.vue'

Submenu.install = (app: App): void => {
  app.component(Submenu.name, Submenu)
}

const _Submenu: SFCWithInstall<typeof Submenu> = Submenu

export default _Submenu
