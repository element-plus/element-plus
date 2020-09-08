import { App } from 'vue'
import TimePicker from './src/time-picker'
export default (app: App): void => {
  app.component(TimePicker.name, TimePicker)
}
