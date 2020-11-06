import { App } from 'vue'
import MenuItemGroup from '../menu/src/menuGroup.vue'
export default (app: App): void => {
  app.component(MenuItemGroup.name, MenuItemGroup)
}
