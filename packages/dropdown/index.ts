import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Dropdown from './src/dropdown.vue'

Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}

const _Dropdown: SFCWithInstall<typeof Dropdown> = Dropdown

export default _Dropdown
