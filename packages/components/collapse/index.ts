import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

Collapse.install = (app: App): void => {
  app.component(Collapse.name, Collapse)
  app.component(CollapseItem.name, CollapseItem)
}

CollapseItem.CollapseItem = CollapseItem

const _Collapse = Collapse as any as SFCWithInstall<typeof Collapse> & {
  CollapseItem: typeof CollapseItem
}

export default _Collapse
export const ElCollapse = _Collapse
export const ElCollapseItem = CollapseItem
