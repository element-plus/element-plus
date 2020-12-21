import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import CheckboxButton from '../checkbox/src/checkbox-button.vue'

CheckboxButton.install = (app: App): void => {
  app.component(CheckboxButton.name, CheckboxButton)
}

const _CheckboxButton: SFCWithInstall<typeof CheckboxButton> = CheckboxButton

export default _CheckboxButton
