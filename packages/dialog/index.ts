import { App } from 'vue'
import Dialog from './src/index.vue'

Dialog.install = (app: App): void => {
  app.component(Dialog.name, Dialog)
}

export default Dialog
