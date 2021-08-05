import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'


Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}

Dropdown.DropdownItem = DropdownItem
Dropdown.DropdownMenu = DropdownMenu

const _Dropdown = Dropdown as any as SFCWithInstall<typeof Dropdown> & {
  DropdownItem: typeof DropdownItem
  DropdownMenu: typeof DropdownMenu
}

export default _Dropdown
