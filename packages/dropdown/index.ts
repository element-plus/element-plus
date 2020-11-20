import { App } from 'vue'
import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'

Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}

export default Dropdown
