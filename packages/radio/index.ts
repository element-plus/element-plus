import { App } from 'vue'
import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'
import RadioButton from './src/radio-button.vue'
export default (app: App): void => {
  app.component(Radio.name, Radio)
  app.component(RadioGroup.name, RadioGroup)
  app.component(RadioButton.name, RadioButton)
}
