import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox)
  app.component(CheckboxButton.name, CheckboxButton)
  app.component(CheckboxGroup.name, CheckboxGroup)
}

Checkbox.CheckboxButton = CheckboxButton
Checkbox.CheckboxGroup = CheckboxGroup

const _Checkbox = Checkbox as any as SFCWithInstall<typeof Checkbox> & {
  CheckboxButton: typeof CheckboxButton
  CheckboxGroup: typeof CheckboxGroup
}

export default _Checkbox
