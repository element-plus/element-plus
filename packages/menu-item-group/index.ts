import { App } from 'vue'
import MenuIteGroup from './src/index.vue'
export default (app: App): void => {
  app.component(MenuIteGroup.name, MenuIteGroup)
}
