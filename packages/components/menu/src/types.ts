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
  items: UnwrapRef<Record<string, MenuItemRegistered>>
  subMenus: UnwrapRef<Record<string, MenuItemRegistered>>
  activeIndex?: string
  isMenuPopup: boolean
  props: MenuProps

  addMenuItem: (item: UnwrapRef<MenuItemRegistered>) => void
  removeMenuItem: (item: UnwrapRef<MenuItemRegistered>) => void
  addSubMenu: (item: UnwrapRef<MenuItemRegistered>) => void
  removeSubMenu: (item: UnwrapRef<MenuItemRegistered>) => void

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
  addSubMenu: (item: UnwrapRef<MenuItemRegistered>) => void
  removeSubMenu: (item: UnwrapRef<MenuItemRegistered>) => void
  handleMouseleave?: (deepDispatch: boolean) => void
}
