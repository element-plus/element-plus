import { withInstall } from '@element-plus/utils'
import Tree from './src/tree.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElTree: SFCWithInstall<typeof Tree> = withInstall(Tree)

export default ElTree

export * from './src/tree.type'
export * from './src/instance'
