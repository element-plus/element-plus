import { App } from 'vue'
import Transfer from './src/index.vue'
export default (app: App): void => {
  app.component(Transfer.name, Transfer)
}
