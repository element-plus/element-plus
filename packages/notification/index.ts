import { App } from 'vue'
import Notification from './src/index.vue'
export default (app: App): void => {
  app.component(Notification.name, Notification)
}
