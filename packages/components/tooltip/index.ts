import { withInstall } from '@element-plus/utils'
import Tooltip from './src/tooltip.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElTooltip: SFCWithInstall<typeof Tooltip> = withInstall(Tooltip)
export * from './src/tooltip'
export * from './src/trigger'
export * from './src/content'
export * from './src/constants'
export default ElTooltip
