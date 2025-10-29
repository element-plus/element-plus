import { withInstall } from '@element-plus/utils'
import Select from './src/select.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElSelectV2: SFCWithInstall<typeof Select> = withInstall(Select)
export default ElSelectV2

export * from './src/token'
