import { withInstall } from '@element-plus/utils'

import Rate from './src/rate.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElRate: SFCWithInstall<typeof Rate> = withInstall(Rate)
export default ElRate

export * from './src/rate'
