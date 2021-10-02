import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

export const ElTabs = withInstall(Tabs, {
  TabPane,
})
export default ElTabs
export const ElTabPane = withNoopInstall(TabPane)
