import { withInstall, withNoopInstall } from '@element-plus/utils'

import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElCollapse: SFCWithInstall<typeof Collapse> & {
  CollapseItem: typeof CollapseItem
} = withInstall(Collapse, {
  CollapseItem,
})
export default ElCollapse
export const ElCollapseItem: SFCWithInstall<typeof CollapseItem> =
  withNoopInstall(CollapseItem)

export * from './src/collapse'
export * from './src/collapse-item'
export * from './src/constants'
export type { CollapseInstance, CollapseItemInstance } from './src/instance'
