import Tooltip from './src/index'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}

const _Tooltip = Tooltip as SFCWithInstall<typeof Tooltip>

export default _Tooltip
export const ElTooltip = _Tooltip
