import { App } from 'vue'
import Calendar from './src/index.vue'

Calendar.install = (app: App): void => {
  app.component(Calendar.name, Calendar)
}

export default Calendar
