import { App } from 'vue'
import MenuItemGroup from '../menu/src/menuItemGroup.vue'

MenuItemGroup.install = (app: App): void => {
  app.component(MenuItemGroup.name, MenuItemGroup)
}

export default MenuItemGroup

