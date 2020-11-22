import { App } from 'vue'
import RadioGroup from '../radio/src/radio-group.vue'

RadioGroup.install = (app: App): void => {
  app.component(RadioGroup.name, RadioGroup)
}

export default RadioGroup
