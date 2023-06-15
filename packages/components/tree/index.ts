import { withInstall } from '@element-plus/utils'

import Tree from './src/tree.vue'

export const ElTree = withInstall(Tree)
export default ElTree

export type { TreeInstance } from './src/instance'
