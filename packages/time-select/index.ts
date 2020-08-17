import { App } from 'vue'
import TimePicker from './src/time-picker'
import Input from './input/input.vue'
export default (app: App): void => {
  app.component(Input.name, Input)
  app.component(TimePicker.name, TimePicker)
}
