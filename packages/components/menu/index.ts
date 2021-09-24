import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'

import Menu from './src/menu'
import MenuItem from './src/menuItem.vue'
import MenuItemGroup from './src/menuItemGroup.vue'
import SubMenu from './src/submenu.vue'

export const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu,
})
export default ElMenu
export const ElMenuItem = withNoopInstall(MenuItem)
export const ElMenuItemGroup = withNoopInstall(MenuItemGroup)
export const ElSubMenu = withNoopInstall(SubMenu)

export * from './src/menu.type'
