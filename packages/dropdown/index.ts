import { App } from 'vue'
import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'

export default (app: App): void => {
  app.component(Dropdown.name, Dropdown)
  app.component(DropdownItem.name, DropdownItem)
  app.component(DropdownMenu.name, DropdownMenu)
}
