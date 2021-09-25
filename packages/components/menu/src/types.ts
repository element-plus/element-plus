import type { RouteLocationRaw } from 'vue-router'
import type { MaybeRef } from '@vueuse/core'
import type { MenuProps } from './menu'
import type { ComputedRef, UnwrapRef } from 'vue'

export interface MenuItemRegistered {
  index: string
  indexPath: ComputedRef<string[]>
  active: ComputedRef<boolean>
}

export interface MenuProviderRaw {
  openedMenus: string[]
  items: any
  subMenus: any
  activeIndex: string
  isMenuPopup: boolean
  props: MenuProps

  addMenuItem: (item: MenuItemRegistered) => void
  removeMenuItem: (item: MenuItemRegistered) => void
  addSubMenu: (item: MenuItemRegistered) => void
  removeSubMenu: (item: MenuItemRegistered) => void
  openMenu: (index: string, indexPath: MaybeRef<string[]>) => void
  closeMenu: (index: string) => void
  handleMenuItemClick: (item: {
    index?: string
    indexPath?: string[]
    route?: RouteLocationRaw
  }) => void
  handleSubMenuClick: (subMenu: { index: string; indexPath: string[] }) => void
}
export type MenuProvider = UnwrapRef<MenuProviderRaw>

export interface SubMenuProvider {
  addSubMenu: (item: MenuItemRegistered) => void
  removeSubMenu: (item: MenuItemRegistered) => void
  handleMouseleave?: (deepDispatch: boolean) => void
}
