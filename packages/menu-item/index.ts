import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import MenuItem from '../menu/src/menuItem.vue'

MenuItem.install = (app: App): void => {
  app.component(MenuItem.name, MenuItem)
}

const _MenuItem: SFCWithInstall<typeof MenuItem> = MenuItem

export default _MenuItem

