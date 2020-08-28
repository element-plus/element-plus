import { App } from 'vue'
import MessageBox from './src/index.vue'
export default (app: App): void => {
  app.component(MessageBox.name, MessageBox)
}
