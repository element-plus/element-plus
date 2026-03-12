import { withInstall } from '@element-plus/utils'
import Link from './src/link.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GLink: SFCWithInstall<typeof Link> = withInstall(Link)
export default GLink

export * from './src/link'
