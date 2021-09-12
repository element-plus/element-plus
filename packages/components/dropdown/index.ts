import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
  app.component(DropdownItem.name, DropdownItem)
  app.component(DropdownMenu.name, DropdownMenu)
}

Dropdown.DropdownItem = DropdownItem
Dropdown.DropdownMenu = DropdownMenu

const _Dropdown = Dropdown as any as SFCWithInstall<typeof Dropdown> & {
  DropdownItem: typeof DropdownItem
  DropdownMenu: typeof DropdownMenu
}

export default _Dropdown
export const ElDropdown = _Dropdown
export const ElDropdownItem = DropdownItem
export const ElDropdownMenu = DropdownMenu
