import Row from './src/row'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Row = Row as SFCWithInstall<typeof Row>

_Row.install = (app: App) => {
  app.component(_Row.name, _Row)
}

export default _Row
export const ElRow = _Row
