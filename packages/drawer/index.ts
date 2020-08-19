import { App } from 'vue'
import Drawer from './src/index.vue'
export default (app: App): void => {
  app.component(Drawer.name, Drawer)
}
