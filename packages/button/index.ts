import { App } from 'vue'
import Button from './src/index.vue'

export default (app: App): void => {
  app.component(Button.name, Button)
}
