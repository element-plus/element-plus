import { withInstall } from '@element-plus/utils'
import Badge from './src/badge.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GBadge: SFCWithInstall<typeof Badge> = withInstall(Badge)
export default GBadge

export * from './src/badge'
export type { BadgeInstance } from './src/instance'
