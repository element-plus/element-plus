import { withInstall } from '@element-plus/utils'
import TimeSelect from './src/time-select.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GTimeSelect: SFCWithInstall<typeof TimeSelect> =
  withInstall(TimeSelect)
export default GTimeSelect

export * from './src/time-select'
