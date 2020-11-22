import { App } from 'vue'
import MessageBox from './src/messageBox'

(MessageBox as any).install = (app: App): void => {
  app.config.globalProperties.$msgbox = MessageBox
  app.config.globalProperties.$messageBox = MessageBox
  app.config.globalProperties.$alert = MessageBox.alert
  app.config.globalProperties.$confirm = MessageBox.confirm
  app.config.globalProperties.$prompt = MessageBox.prompt
}

export default MessageBox
