import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import DropdownItem from '../dropdown/src/dropdown-item.vue'

DropdownItem.install = (app: App): void => {
  app.component(DropdownItem.name, DropdownItem)
}

const _DropdownItem: SFCWithInstall<typeof DropdownItem> = DropdownItem

export default _DropdownItem
