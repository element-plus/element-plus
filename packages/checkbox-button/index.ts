import { App } from 'vue'
import CheckboxButton from '../checkbox/src/checkbox-button.vue'

CheckboxButton.install = (app: App): void => {
  app.component(CheckboxButton.name, CheckboxButton)
}

export default CheckboxButton
