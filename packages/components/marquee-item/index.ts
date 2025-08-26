import { withInstall } from '@element-plus/utils'
import MarqueeItem from './src/marquee-item.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElMarqueeItem: SFCWithInstall<typeof MarqueeItem> =
  withInstall(MarqueeItem)
export default ElMarqueeItem

export { default as MarqueeItem } from './src/marquee-item.vue'

// 导出类型
export * from './src/marquee-item'
