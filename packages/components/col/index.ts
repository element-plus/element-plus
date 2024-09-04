import { withInstall } from '@element-plus/utils'

import Col from './src/col.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElCol: SFCWithInstall<typeof Col> = withInstall(Col)
export default ElCol

export * from './src/col'
