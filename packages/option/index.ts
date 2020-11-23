import { App } from 'vue'
import Option from '../select/src/option.vue'

Option.install = (app: App): void => {
  app.component(Option.name, Option)
}

export default Option
