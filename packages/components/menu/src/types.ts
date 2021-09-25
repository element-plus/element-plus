import type { Ref, ComputedRef, UnwrapRef } from 'vue'

export interface MenuItemRegistered {
  index: string
  indexPath: ComputedRef<string[]>
  active: ComputedRef<boolean>
}

export interface MenuProviderRaw {
  openedMenus: unknown[]
  items: any
  subMenus: any
  activeIndex: string
  isMenuPopup: boolean
  props: Readonly<Partial<RootMenuProps>>

  addMenuItem: (item: MenuItemRegistered) => void
  removeMenuItem: (item: MenuItemRegistered) => void
  addSubMenu: (item: MenuItemRegistered) => void
  removeSubMenu: (item: MenuItemRegistered) => void
  openMenu: (index: string, indexPath: Ref<string[]>) => void
  closeMenu: (index: string) => void
  handleMenuItemClick: (item: {
    index: string
    indexPath: ComputedRef<string[]>
    route?: any
  }) => void
  handleSubMenuClick: (submenu: {
    index: string
    indexPath: ComputedRef<string[]>
  }) => void
}
export type MenuProvider = UnwrapRef<MenuProviderRaw>

export interface SubMenuProvider {
  addSubMenu: (item: MenuItemRegistered) => void
  removeSubMenu: (item: MenuItemRegistered) => void
  handleMouseleave?: (deepDispatch: boolean) => void
}

export interface RootMenuProps {
  mode: string
  defaultActive: string
  defaultOpeneds: unknown[]
  uniqueOpened: boolean
  router: boolean
  menuTrigger: string
  collapse: boolean
  backgroundColor: string
  textColor: string
  activeTextColor: string
  collapseTransition: boolean
}
