import { withInstall } from '@element-plus/utils'
import CascaderPanel from './src/index.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElCascaderPanel: SFCWithInstall<typeof CascaderPanel> =
  withInstall(CascaderPanel)

export default ElCascaderPanel
export * from './src/types'
export * from './src/config'
export * from './src/instance'
