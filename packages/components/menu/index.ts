import { withInstall, withNoopInstall } from '@element-plus/utils'

import Menu from './src/menu'
import MenuItem from './src/menu-item.vue'
import MenuItemGroup from './src/menu-item-group.vue'
import SubMenu from './src/sub-menu'

export const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu,
})
export default ElMenu
export const ElMenuItem = withNoopInstall(MenuItem)
export const ElMenuItemGroup = withNoopInstall(MenuItemGroup)
export const ElSubMenu = withNoopInstall(SubMenu)
export type MenuItemInstance = InstanceType<typeof MenuItem>
export type MenuItemGroupInstance = InstanceType<typeof MenuItemGroup>
export type SubMenuInstance = InstanceType<typeof SubMenu>

export * from './src/menu'
export * from './src/menu-item'
export * from './src/menu-item-group'
export * from './src/sub-menu'
export * from './src/types'
