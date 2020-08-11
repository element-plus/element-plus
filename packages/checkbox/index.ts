import { App } from 'vue'
import Checkbox from './src/checkbox.vue'
export default (app: App): void => {
  app.component(Checkbox.name, Checkbox)
}
