import { App } from 'vue'
import DatePicker from './src/date-picker'
export default (app: App): void => {
  app.component(DatePicker.name, DatePicker)
}
