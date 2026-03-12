import { withInstall } from '@element-plus/utils'
import Popconfirm from './src/popconfirm.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GPopconfirm: SFCWithInstall<typeof Popconfirm> =
  withInstall(Popconfirm)
export default GPopconfirm

export * from './src/popconfirm'
