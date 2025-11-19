import type Menu from './menu'
import type MenuItem from './menu-item.vue'
import type MenuItemGroup from './menu-item-group.vue'
import type SubMenu from './sub-menu'

export type MenuInstance = InstanceType<typeof Menu> & {
  open: (index: string) => void
  close: (index: string) => void
  handleResize: () => void
  updateActiveIndex: (index: string) => void
}

export type MenuItemInstance = InstanceType<typeof MenuItem> & unknown
export type MenuItemGroupInstance = InstanceType<typeof MenuItemGroup> & unknown
export type SubMenuInstance = InstanceType<typeof SubMenu> & unknown
