import { withInstall } from '@element-plus/utils'
import Statistic from './src/statistic.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GStatistic: SFCWithInstall<typeof Statistic> =
  withInstall(Statistic)

export default GStatistic
export * from './src/statistic'
