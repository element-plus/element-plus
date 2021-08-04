import Menu from './src/menu.vue'
import MenuItem from './src/menuItem.vue'
import MenuItemGroup from './src/menuItemGroup.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
  app.component(MenuItem.name, MenuItem)
  app.component(MenuItemGroup.name, MenuItemGroup)
}

Menu.MenuItem = MenuItem
Menu.MenuItemGroup = MenuItemGroup

const _Menu = Menu as any as SFCWithInstall<typeof Menu> & {
  MenuItem: typeof MenuItem
  MenuItemGroup: typeof MenuItemGroup
}

export default _Menu

export * from './src/menu'

