import { App } from 'vue'
import TimePicker from './src/time-picker'
import DatePicker from './src/date-picker'
export default (app: App): void => {
  app.component(DatePicker.name, DatePicker)
  app.component(TimePicker.name, TimePicker)
}
