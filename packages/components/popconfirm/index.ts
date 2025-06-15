import { withInstall } from '@element-plus/utils'

import Popconfirm from './src/popconfirm.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElPopconfirm: SFCWithInstall<typeof Popconfirm> =
  withInstall(Popconfirm)
export default ElPopconfirm

export * from './src/popconfirm'
