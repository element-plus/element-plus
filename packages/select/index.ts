import { App } from 'vue'
import Select from './src/select.vue'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
}

export default Select
