import { App } from 'vue'
import Notify from './src/notify'
export default (app: App): void => {
  app.config.globalProperties.$notify = Notify
}

export { Notify }
