import { App } from 'vue'
import Submenu from '../menu/src/submenu.vue'

Submenu.install = (app: App): void => {
  app.component(Submenu.name, Submenu)
}

export default Submenu
