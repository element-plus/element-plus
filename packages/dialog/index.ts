import { App } from 'vue'
import Dialog from './src/index'
export default (app: App): void => {
  app.component(Dialog.name, Dialog)
}
