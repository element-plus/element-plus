import { withInstall, withNoopInstall } from '@element-plus/utils'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GTabs: SFCWithInstall<typeof Tabs> & {
  TabPane: typeof TabPane
} = withInstall(Tabs, {
  TabPane,
})
export const GTabPane: SFCWithInstall<typeof TabPane> =
  withNoopInstall(TabPane)
export default GTabs

export * from './src/tabs'
export * from './src/tab-bar'
export * from './src/tab-nav'
export * from './src/tab-pane'
export * from './src/constants'
