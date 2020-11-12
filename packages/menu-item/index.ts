import { App } from 'vue'
import MenuItem from '../menu/src/menuItem.vue'
export default (app: App): void => {
  app.component(MenuItem.name, MenuItem)
}
