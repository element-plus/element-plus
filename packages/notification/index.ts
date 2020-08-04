import { App } from 'vue'
import Notification from './src/index.vue'
import Notify from './src/notify'
export default (app: App): void => {
  app.component(Notification.name, Notification)
  app.config.globalProperties.$notify = Notify
  console.log(app.config.globalProperties)
}
