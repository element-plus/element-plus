import { withInstall } from '@element-plus/utils'
import Col from './src/col.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GCol: SFCWithInstall<typeof Col> = withInstall(Col)
export default GCol

export * from './src/col'
