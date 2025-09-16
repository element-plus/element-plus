import type { Ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { MenuProps } from './menu'

export interface MenuItemRegistered {
  index: string | null
  indexPath: (string | null)[]
  active: boolean
}
export interface MenuItemClicked {
  index: string | null
  indexPath: (string | null)[]
  route?: RouteLocationRaw
}

export interface MenuProvider {
  openedMenus: string[]
  items: Record<string, MenuItemRegistered>
  subMenus: Record<string, MenuItemRegistered>
  activeIndex?: string
  isMenuPopup: boolean
  props: MenuProps

  addMenuItem: (item: MenuItemRegistered) => void
  removeMenuItem: (item: MenuItemRegistered) => void
  addSubMenu: (item: MenuItemRegistered) => void
  removeSubMenu: (item: MenuItemRegistered) => void

  openMenu: (index: string | null, indexPath: (string | null)[]) => void
  closeMenu: (index: string | null, indexPath: (string | null)[]) => void

  handleMenuItemClick: (item: MenuItemClicked) => void
  handleSubMenuClick: (subMenu: MenuItemRegistered) => void
}

export interface SubMenuProvider {
  addSubMenu: (item: MenuItemRegistered) => void
  removeSubMenu: (item: MenuItemRegistered) => void
  handleMouseleave?: (deepDispatch: boolean) => void
  mouseInChild: Ref<boolean>
  level: number
}
