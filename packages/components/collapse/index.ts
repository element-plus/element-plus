import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'
import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Collapse.install = (app: App): void => {
  app.component(Collapse.name, Collapse)
  app.component(CollapseItem.name, CollapseItem)
}

Collapse.CollapseItem = CollapseItem

const _Collapse = Collapse as any as SFCWithInstall<typeof Collapse> & {
  CollapseItem: typeof CollapseItem
}

export default _Collapse
export const ElCollapse = _Collapse
export const ElCollapseItem = CollapseItem
