import { App } from 'vue'
import InputNumber from './src/index.vue'

InputNumber.install = (app: App): void => {
  app.component(InputNumber.name, InputNumber)
}

export default InputNumber
