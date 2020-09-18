import { App } from 'vue'
import Calendar from './src/index.vue'
export default (app: App): void => {
  app.component(Calendar.name, Calendar)
}
