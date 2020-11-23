import { App } from 'vue'
import Notify from './src/notify'

(Notify as any).install = (app: App): void => {
  app.config.globalProperties.$notify = Notify
}

export default Notify
