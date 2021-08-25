import Col from './src/col'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Col = Col as SFCWithInstall<typeof Col>

_Col.install = (app: App) => {
  app.component(_Col.name, _Col)
}

export default _Col
export const ElCol = _Col
