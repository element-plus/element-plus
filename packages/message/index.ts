import { App } from 'vue'
import Message from './src/message'
export default (app: App): void => {
  app.config.globalProperties.$message = Message
}
