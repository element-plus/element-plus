import { withInstall } from '@element-plus/utils'
import PageHeader from './src/page-header.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GPageHeader: SFCWithInstall<typeof PageHeader> =
  withInstall(PageHeader)
export default GPageHeader

export * from './src/page-header'
