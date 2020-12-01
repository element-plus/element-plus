import { App } from 'vue'
import Drawer from './src/index.vue'

Drawer.install = (app: App): void => {
  app.component(Drawer.name, Drawer)
}

export default Drawer
