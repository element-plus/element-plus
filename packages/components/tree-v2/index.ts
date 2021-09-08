import TreeV2 from './src/tree.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

TreeV2.install = (app: App): void => {
  app.component(TreeV2.name, TreeV2)
}

const _TreeV2 = TreeV2 as SFCWithInstall<typeof TreeV2>

export default _TreeV2
export const ElTreeV2 = _TreeV2
