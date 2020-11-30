import { App } from 'vue'
import Select from './src/select.vue'
import Option from './src/option.vue'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
}

export { Option }
export default Select
