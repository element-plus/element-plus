import { App } from 'vue'
import OptionGroup from '../select/src/option-group.vue'

OptionGroup.install = (app: App): void => {
  app.component(OptionGroup.name, OptionGroup)
}

export default OptionGroup
