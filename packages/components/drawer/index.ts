import { withInstall } from '@element-plus/utils'
import Drawer from './src/drawer.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElDrawer: SFCWithInstall<typeof Drawer> = withInstall(Drawer)
export default ElDrawer

export * from './src/drawer'
