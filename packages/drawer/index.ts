import { App } from 'vue'
import Drawer from './src/index'
export default (app: App): void => {
  app.component(Drawer.name, Drawer)
}
