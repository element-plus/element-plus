import { App } from 'vue'
import Dropdown from './src/dropdown.vue'
export default (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}
