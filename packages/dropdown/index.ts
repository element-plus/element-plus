import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Dropdown from './src/dropdown.vue'

Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}

const _Dropdown: SFCWithInstall<typeof Dropdown> = Dropdown

export default _Dropdown
