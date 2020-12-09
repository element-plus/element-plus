import { App } from 'vue'
import Menu from './src/menu.vue'

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
}

export default Menu

