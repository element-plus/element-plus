import { App } from 'vue'
import TimeSelect from './src/time-select'
export default (app: App): void => {
  app.component(TimeSelect.name, TimeSelect)
}
