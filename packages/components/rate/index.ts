import { withInstall } from '@element-plus/utils'
import Rate from './src/rate.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GRate: SFCWithInstall<typeof Rate> = withInstall(Rate)
export default GRate

export * from './src/rate'
