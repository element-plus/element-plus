import { withInstall } from '@element-plus/utils'
import Countdown from './src/countdown.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElCountdown: SFCWithInstall<typeof Countdown> =
  withInstall(Countdown)
export default ElCountdown

export * from './src/countdown'
