import { withInstall } from '@element-plus/utils'
import Switch from './src/switch.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GSwitch: SFCWithInstall<typeof Switch> = withInstall(Switch)
export default GSwitch

export * from './src/switch'
