import { App } from 'vue'
import Button from './src/index.vue'
export const install = function(app: App) {
  app.component(Button.name, Button)
}
