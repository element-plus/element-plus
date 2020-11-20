import { App } from 'vue'
import Transfer from './src/index.vue'

Transfer.install = (app: App): void => {
  app.component(Transfer.name, Transfer)
}

export default Transfer
