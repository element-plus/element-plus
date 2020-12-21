import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import DropdownMenu from '../dropdown/src/dropdown-menu.vue'

DropdownMenu.install = (app: App): void => {
  app.component(DropdownMenu.name, DropdownMenu)
}

const _DropdownMenu: SFCWithInstall<typeof DropdownMenu> = DropdownMenu

export default _DropdownMenu
