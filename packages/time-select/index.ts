import { App } from 'vue'
import TimeSelect from './src/time-select.vue'

TimeSelect.install = (app: App): void => {
  app.component(TimeSelect.name, TimeSelect)
}

export default TimeSelect
