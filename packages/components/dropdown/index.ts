import { withInstall, withNoopInstall } from '@element-plus/utils'

import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownItemGroup from './src/dropdown-item-group.vue'
import DropdownMenu from './src/dropdown-menu.vue'

export const ElDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu,
})
export default ElDropdown
export const ElDropdownItem = withNoopInstall(DropdownItem)
export const ElDropdownItemGroup = withNoopInstall(DropdownItemGroup)
export const ElDropdownMenu = withNoopInstall(DropdownMenu)
export * from './src/dropdown'
export * from './src/instance'
export * from './src/tokens'
