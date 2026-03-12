import { withInstall } from '@element-plus/utils'
import Countdown from './src/countdown.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GCountdown: SFCWithInstall<typeof Countdown> =
  withInstall(Countdown)
export default GCountdown

export * from './src/countdown'
