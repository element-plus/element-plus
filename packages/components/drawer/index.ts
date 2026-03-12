import { withInstall } from '@element-plus/utils'
import Drawer from './src/drawer.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GDrawer: SFCWithInstall<typeof Drawer> = withInstall(Drawer)
export default GDrawer

export * from './src/drawer'
