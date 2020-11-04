import { App } from 'vue'
import select from './src/select.vue'
import optionGroup from './src/option-group.vue'
import option from './src/option.vue'

export default (app: App): void => {
  app.component(select.name, select)
  app.component(optionGroup.name, optionGroup)
  app.component(option.name, option)
}

export { select, optionGroup, option }
