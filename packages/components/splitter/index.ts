import { withInstall, withNoopInstall } from '@element-plus/utils'
import Splitter from './src/splitter.vue'
import SplitPanel from './src/split-panel.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GSplitter: SFCWithInstall<typeof Splitter> & {
  SplitPanel: typeof SplitPanel
} = withInstall(Splitter, {
  SplitPanel,
})
export default GSplitter

export const GSplitterPanel: SFCWithInstall<typeof SplitPanel> =
  withNoopInstall(SplitPanel)

export * from './src/splitter'
export * from './src/split-panel'
