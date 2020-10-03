import { App } from 'vue'
import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export { Checkbox }

export default (app: App): void => {
  app.component(Checkbox.name, Checkbox)
  app.component(CheckboxButton.name, CheckboxButton)
  app.component(CheckboxGroup.name, CheckboxGroup)
}
