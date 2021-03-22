import { App } from 'vue'
import Tooltip from './src/index'
import { SFCWithInstall } from '@element-plus/utils/types'

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}

const _Tooltip: SFCWithInstall<typeof Tooltip> = Tooltip as SFCWithInstall<typeof Tooltip>

export default _Tooltip
