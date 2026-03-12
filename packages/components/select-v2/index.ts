import { withInstall } from '@element-plus/utils'
import Select from './src/select.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GSelectV2: SFCWithInstall<typeof Select> = withInstall(Select)
export default GSelectV2

export * from './src/token'
