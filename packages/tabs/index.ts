import { App } from 'vue'
import Tabs from './src/tabs.vue'
import TabBar from './src/tab-bar.vue'
import TabNav from './src/tab-nav.vue'
import TabPane from './src/tab-pane.vue'
export default (app: App): void => {
  app.component(Tabs.name, Tabs)
  app.component(TabBar.name, TabBar)
  app.component(TabNav.name, TabNav)
  app.component(TabPane.name, TabPane)
}
