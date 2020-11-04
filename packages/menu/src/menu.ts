import { ToRefs } from 'vue'

// root menu

export interface IMenuProps {
  mode: 'vertical' | 'horizontal'
  defaultActive: string
  defaultOpeneds: string[]
  uniqueOpened: boolean
  router: boolean
  menuTrigger: 'hover' | 'click'
  collapse: boolean
  backgroundColor: string
  textColor: string
  activeTextColor: string
  collapseTransition: boolean
}

export interface RootMenuData {
  styles: string
  class: string
  activeIndex: string
  openedMenus: unknown[]
  items: any
  submenus: any
  hoverBackground: string
  isMenuPopup: boolean
}

export interface RootMenuProps {
  mode: string
  defaultActive: string
  defaultOpeneds: any[]
  uniqueOpened: boolean
  router: boolean
  menuTrigger: string
  collapse: boolean
  backgroundColor: string
  textColor: string
  activeTextColor: string
  collapseTransition: boolean
}

export interface RootMenuProvider {
  data: ToRefs<RootMenuData>
  props: Readonly<Partial<RootMenuProps>>
  methods: {
    addMenuItem: (item: any) => void
    removeMenuItem: (item: any) => void
    addSubMenu: (item: any) => void
    removeSubMenu: (item: any) => void
    openMenu: (index: string, indexPath: string) => void
  }
}

// submenu

export interface ISubmenuProps {
  index: string
  showTimeout: number
  hideTimeout
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
