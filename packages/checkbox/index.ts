import { App } from 'vue'
import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox)
}

export default Checkbox
