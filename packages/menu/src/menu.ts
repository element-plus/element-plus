import { Ref, ComputedRef } from 'vue'
import { Emitter } from 'mitt'

export interface RegisterMenuItem {
  index: string
  indexPath: ComputedRef<string[]>
  active: ComputedRef<boolean>
}

export interface RootMenuData {
  activeIndex: string
  openedMenus: unknown[]
  items: any
  submenus: any
  isMenuPopup: boolean
}

export interface RootMenuProvider {
  openedMenus: Ref<RootMenuData['openedMenus']>
  items: Ref<RootMenuData['items']>
  submenus: Ref<RootMenuData['submenus']>
  activeIndex: Ref<RootMenuData['activeIndex']>
  hoverBackground: Ref<string>
  isMenuPopup: Ref<RootMenuData['isMenuPopup']>

  props: Readonly<Partial<RootMenuProps>>
  methods: {
    addMenuItem: (item: RegisterMenuItem) => void
    removeMenuItem: (item: RegisterMenuItem) => void
    addSubMenu: (item: RegisterMenuItem) => void
    removeSubMenu: (item: RegisterMenuItem) => void
    openMenu: (index: string, indexPath: Ref<string[]>) => void
    closeMenu: (index: string) => void
  }
  rootMenuEmit: Emitter['emit']
  rootMenuOn: Emitter['on']
}

export interface SubMenuProvider {
  addSubMenu: (item: RegisterMenuItem) => void
  removeSubMenu: (item: RegisterMenuItem) => void
  handleMouseleave?: (deepDispatch: boolean) => void
}

// root menu
export interface IMenuProps {
  mode?: string | 'vertical' | 'horizontal'
  defaultActive?: string
  defaultOpeneds?: unknown[]
  uniqueOpened?: boolean
  router?: boolean
  menuTrigger?: string | 'hover' | 'click'
  collapse?: boolean
  backgroundColor?: string
  textColor?: string
  activeTextColor?: string
  collapseTransition?: boolean
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

// submenu

export interface ISubmenuProps {
  index: string
  showTimeout?: number
  hideTimeout?: number
  popperClass?: string
  disabled?: boolean
  popperAppendToBody?: boolean
}

// menuItem

export interface IMenuItemProps {
  index: string
  route: string | Record<string, unknown>
  popperClass: string
  disabled: boolean
  popperAppendToBody?: boolean
}

// menuGroup

export interface IMenuGroupProps {
  title: string
}
