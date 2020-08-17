import { App } from 'vue'
import Dropdown from './src/index.vue'
export default (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}
