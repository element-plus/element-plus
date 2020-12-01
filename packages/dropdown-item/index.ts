import { App } from 'vue'
import DropdownItem from '../dropdown/src/dropdown-item.vue'

DropdownItem.install = (app: App): void => {
  app.component(DropdownItem.name, DropdownItem)
}

export default DropdownItem
