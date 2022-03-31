import { withInstall, withNoopInstall } from '@element-plus/utils'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

export const ElTabs = withInstall(Tabs, {
  TabPane,
})
export const ElTabPane = withNoopInstall(TabPane)
export default ElTabs

export * from './src/tabs'
export * from './src/tab-bar'
export * from './src/tab-nav'
export * from './src/tab-pane'
