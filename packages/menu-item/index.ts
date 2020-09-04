import { App } from 'vue'
import MenuItem from './src/index.vue'
export default (app: App): void => {
  app.component(MenuItem.name, MenuItem)
}
