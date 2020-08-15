import { App } from 'vue'
import TimeSelect from './src/index.vue'
import Input from './input/input.vue'
export default (app: App): void => {
  app.component(Input.name, Input)
  app.component(TimeSelect.name, TimeSelect)
}
