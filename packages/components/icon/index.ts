import { withInstall } from '@element-plus/utils'
import Icon from './src/icon.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GIcon: SFCWithInstall<typeof Icon> = withInstall(Icon)
export default GIcon

export * from './src/icon'
