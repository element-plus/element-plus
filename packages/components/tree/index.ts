import { withInstall } from '@element-plus/utils'
import Tree from './src/tree.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GTree: SFCWithInstall<typeof Tree> = withInstall(Tree)

export default GTree

export * from './src/tree.type'
export * from './src/instance'
export * from './src/tokens'
export * from './src/tree'
