import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import TabPane from '../tabs/src/tab-pane.vue'

TabPane.install = (app: App): void => {
  app.component(TabPane.name, TabPane)
}

const _TabPane: SFCWithInstall<typeof TabPane> = TabPane

export default _TabPane
