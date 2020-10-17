import { App } from 'vue'
import InputNumber from './src/index.vue'
export default (app: App): void => {
  app.component(InputNumber.name, InputNumber)
}
