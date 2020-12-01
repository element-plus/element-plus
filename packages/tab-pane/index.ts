import { App } from 'vue'
import TabPane from '../tabs/src/tab-pane.vue'

TabPane.install = (app: App): void => {
  app.component(TabPane.name, TabPane)
}

export default TabPane
