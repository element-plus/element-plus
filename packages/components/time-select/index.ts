import { withInstall } from '@element-plus/utils'
import TimeSelect from './src/time-select.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElTimeSelect: SFCWithInstall<typeof TimeSelect> =
  withInstall(TimeSelect)
export default ElTimeSelect

export * from './src/time-select'
