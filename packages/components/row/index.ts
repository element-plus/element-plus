import { withInstall } from '@element-plus/utils'
import Row from './src/row.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GRow: SFCWithInstall<typeof Row> = withInstall(Row)
export default GRow

export * from './src/row'
export * from './src/constants'
