import { App } from 'vue'
import Menu from './src/index.vue'
export default (app: App): void => {
  app.component(Menu.name, Menu)
}
