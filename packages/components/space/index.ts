import Space from './src/index'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Space = Space as SFCWithInstall<typeof Space>

_Space.install = (app: App) => {
  app.component(_Space.name, _Space)
}

export default _Space
export const ElSpace = _Space
