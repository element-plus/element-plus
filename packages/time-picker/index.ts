import { App } from 'vue'
import TimePicker from './src/time-picker'
import TimePickPanel from './src/time-picker-com/panel-time-pick.vue'
export * from './src/common/date-utils'

export default (app: App): void => {
  app.component(TimePicker.name, TimePicker)
}

export { TimePicker, TimePickPanel }
