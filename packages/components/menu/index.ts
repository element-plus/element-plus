import Menu from './src/menu'
import MenuItem from './src/menuItem.vue'
import MenuItemGroup from './src/menuItemGroup.vue'
import SubMenu from './src/submenu.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
  app.component(MenuItem.name, MenuItem)
  app.component(MenuItemGroup.name, MenuItemGroup)
  app.component(SubMenu.name, SubMenu)
}

Menu.MenuItem = MenuItem
Menu.MenuItemGroup = MenuItemGroup
Menu.SubMenu = SubMenu

const _Menu = Menu as any as SFCWithInstall<typeof Menu> & {
  MenuItem: typeof MenuItem
  MenuItemGroup: typeof MenuItemGroup
  SubMenu: typeof SubMenu
}

export default _Menu
export const ElMenu = _Menu
export const ElMenuItem = MenuItem
export const ElMenuItemGroup = MenuItemGroup
export const ElSubMenu = SubMenu

export * from './src/menu.type'
