import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Checkbox from './src/checkbox.vue'

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox)
}

const _Checkbox: SFCWithInstall<typeof Checkbox> = Checkbox

export default _Checkbox
