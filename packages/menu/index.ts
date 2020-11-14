import { App } from 'vue'
import Menu from './src/menu.vue'
import Submenu from './src/submenu.vue'
import MenuItem from './src/menuItem.vue'
import MenuItemGroup from './src/menuItemGroup.vue'
export default (app: App): void => {
  app.component(Menu.name, Menu)
  app.component(Submenu.name, Submenu)
  app.component(MenuItem.name, MenuItem)
  app.component(MenuItemGroup.name, MenuItemGroup)
}

export { Menu, Submenu, MenuItem, MenuItemGroup }
