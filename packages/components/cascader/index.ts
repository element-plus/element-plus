import { withInstall } from '@element-plus/utils'
import Cascader from './src/cascader.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GCascader: SFCWithInstall<typeof Cascader> = withInstall(Cascader)

export default GCascader

export * from './src/cascader'
export * from './src/instances'
