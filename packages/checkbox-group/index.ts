import { App } from 'vue'
import CheckboxGroup from '../checkbox/src/checkbox-group.vue'

CheckboxGroup.install = (app: App): void => {
  app.component(CheckboxGroup.name, CheckboxGroup)
}

export default CheckboxGroup
