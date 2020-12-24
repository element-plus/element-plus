import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import MenuItemGroup from '../menu/src/menuItemGroup.vue'

MenuItemGroup.install = (app: App): void => {
  app.component(MenuItemGroup.name, MenuItemGroup)
}

const _MenuItemGroup: SFCWithInstall<typeof MenuItemGroup> = MenuItemGroup

export default _MenuItemGroup

