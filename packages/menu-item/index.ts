import { App } from 'vue'
import MenuItem from '../menu/src/menuItem.vue'

MenuItem.install = (app: App): void => {
  app.component(MenuItem.name, MenuItem)
}

export default MenuItem

