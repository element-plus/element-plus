import { App } from 'vue'
import Submenu from '../menu/src/submenu.vue'
export default (app: App): void => {
  app.component(Submenu.name, Submenu)
}
