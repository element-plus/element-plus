import { App } from 'vue'
import Select from './src/select.vue'
import OptionGroup from './src/option-group.vue'
import Option from './src/option.vue'

export default (app: App): void => {
  app.component(Select.name, Select)
  app.component(OptionGroup.name, OptionGroup)
  app.component(Option.name, Option)
}

export const ElSelect = Select
