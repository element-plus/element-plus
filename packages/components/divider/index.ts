import { withInstall } from '@element-plus/utils'
import Divider from './src/divider.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GDivider: SFCWithInstall<typeof Divider> = withInstall(Divider)
export default GDivider

export * from './src/divider'
