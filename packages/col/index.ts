import Col from './src/col'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Col: SFCWithInstall<typeof Col> = Col as SFCWithInstall<typeof Col>

_Col.install = app => {
  app.component(_Col.name, _Col)
}

export default _Col
