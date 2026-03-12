import { withInstall } from '@element-plus/utils'
import Affix from './src/affix.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GAffix: SFCWithInstall<typeof Affix> = withInstall(Affix)
export default GAffix

export * from './src/affix'
