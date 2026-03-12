import { withInstall } from '@element-plus/utils'
import CheckTag from './src/check-tag.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GCheckTag: SFCWithInstall<typeof CheckTag> = withInstall(CheckTag)
export default GCheckTag

export * from './src/check-tag'
