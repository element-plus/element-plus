import { withInstall } from '@element-plus/utils'
import Statistic from './src/statistic.vue'
import Countdown from './src/countdown.vue'

export * from './src/statistic'
export * from './src/countdown'

export const ElStatistic = withInstall(Statistic)
export const ElCountdown = withInstall(Countdown)

export default ElStatistic
