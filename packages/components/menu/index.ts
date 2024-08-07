import { withInstall, withNoopInstall } from '@element-plus/utils'

import Menu from './src/menu'
import MenuItem from './src/menu-item.vue'
import MenuItemGroup from './src/menu-item-group.vue'
import SubMenu from './src/sub-menu'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElMenu: SFCWithInstall<typeof Menu> & {
  MenuItem: typeof MenuItem
  MenuItemGroup: typeof MenuItemGroup
  SubMenu: typeof SubMenu
} = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu,
})
export default ElMenu
export const ElMenuItem: SFCWithInstall<typeof MenuItem> =
  withNoopInstall(MenuItem)
export const ElMenuItemGroup: SFCWithInstall<typeof MenuItemGroup> =
  withNoopInstall(MenuItemGroup)
export const ElSubMenu: SFCWithInstall<typeof SubMenu> =
  withNoopInstall(SubMenu)

export * from './src/menu'
export * from './src/menu-item'
export * from './src/menu-item-group'
export * from './src/sub-menu'
export * from './src/types'
export * from './src/instance'
