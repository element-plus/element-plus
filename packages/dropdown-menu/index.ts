import { App } from 'vue'
import DropdownMenu from '../dropdown/src/dropdown-menu.vue'

DropdownMenu.install = (app: App): void => {
  app.component(DropdownMenu.name, DropdownMenu)
}

export default DropdownMenu
