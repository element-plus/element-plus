import { App } from 'vue'
import RadioButton from '../radio/src/radio-button.vue'

RadioButton.install = (app: App): void => {
  app.component(RadioButton.name, RadioButton)
}

export default RadioButton
