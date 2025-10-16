import { withInstall } from '@element-plus/utils'
import Marquee from './src/marquee.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElMarquee: SFCWithInstall<typeof Marquee> = withInstall(Marquee)

export default ElMarquee

export * from './src/marquee'

export type { MarqueeInstance } from './src/marquee'
