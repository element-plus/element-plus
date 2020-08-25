import { App } from 'vue'
import Dialog from './src/index.vue'
export default (app: App): void => {
  app.component(Dialog.name, Dialog)
}
