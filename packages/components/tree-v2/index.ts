import { withInstall } from '@element-plus/utils'
import TreeV2 from './src/tree.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GTreeV2: SFCWithInstall<typeof TreeV2> = withInstall(TreeV2)
export default GTreeV2

export type { TreeV2Instance } from './src/instance'
