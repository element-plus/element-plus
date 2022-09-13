import TreeSelect from './src/tree-select.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils'

TreeSelect.install = (app: App): void => {
  app.component(TreeSelect.name, TreeSelect)
}

const _TreeSelect = TreeSelect as SFCWithInstall<typeof TreeSelect>

export default _TreeSelect
export const ElTreeSelect = _TreeSelect
