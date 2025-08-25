import { withInstall } from '@element-plus/utils'
import AutoScrollText from './src/auto-scroll-text.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElAutoScrollText: SFCWithInstall<typeof AutoScrollText> =
  withInstall(AutoScrollText)
export default ElAutoScrollText

export { default as AutoScrollText } from './src/auto-scroll-text.vue'

// 导出类型
export * from './src/auto-scroll-text'
