import { App } from 'vue'
import TimePicker from './src/time-picker'
export * from './src/common/date-utils'

TimePicker.install = (app: App): void => {
  app.component(TimePicker.name, TimePicker)
}

export default TimePicker
