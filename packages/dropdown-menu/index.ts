import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import DropdownMenu from '../dropdown/src/dropdown-menu.vue'

DropdownMenu.install = (app: App): void => {
  app.component(DropdownMenu.name, DropdownMenu)
}

const _DropdownMenu: SFCWithInstall<typeof DropdownMenu> = DropdownMenu

export default _DropdownMenu
