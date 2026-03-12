import { withInstall } from '@element-plus/utils'
import Scrollbar from './src/scrollbar.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GScrollbar: SFCWithInstall<typeof Scrollbar> =
  withInstall(Scrollbar)
export default GScrollbar

export * from './src/util'
export * from './src/scrollbar'
export * from './src/thumb'
export * from './src/constants'
