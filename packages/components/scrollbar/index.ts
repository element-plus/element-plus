import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'

import Scrollbar from './src/scrollbar.vue'
import Bar from './src/bar.vue'

export const ElScrollbar = withInstall(Scrollbar, {
  Bar,
})
export default ElScrollbar
export const ElBar = withNoopInstall(Bar)

export * from './src/util'
export * from './src/scrollbar'
export * from './src/bar'
