import { App } from 'vue'
import TimeSelect from './src/time-select.vue'
export default (app: App): void => {
  app.component(TimeSelect.name, TimeSelect)
}

export const ElTimeSelect = TimeSelect
