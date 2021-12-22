import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'

import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'

export const ElDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu,
})
export default ElDropdown
export const ElDropdownItem = withNoopInstall(DropdownItem)
export const ElDropdownMenu = withNoopInstall(DropdownMenu)
