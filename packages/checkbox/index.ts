import { App } from 'vue'
import Checkbox from './src/checkbox.vue'

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox)
}

export default Checkbox
