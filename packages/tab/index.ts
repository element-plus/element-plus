import { App } from 'vue'
import Tab from './src/index.vue'
export default (app: App) => {
  app.component(Tab.name, Tab)
}

