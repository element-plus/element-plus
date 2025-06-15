import { withInstall } from '@element-plus/utils'
import CollapseTransition from './src/collapse-transition.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElCollapseTransition: SFCWithInstall<typeof CollapseTransition> =
  withInstall(CollapseTransition)

export default ElCollapseTransition
