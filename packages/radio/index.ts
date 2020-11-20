import { App } from 'vue'
import Radio from './src/radio.vue'

Radio.install = (app: App): void => {
  app.component(Radio.name, Radio)
}

export default Radio
