import { App } from 'vue'
import Tabs from './src/tabs.vue'

Tabs.install = (app: App): void => {
  app.component(Tabs.name, Tabs)
}

export default Tabs
