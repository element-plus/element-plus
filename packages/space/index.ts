import Space from './src/index'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Space: SFCWithInstall<typeof Space> = Space as SFCWithInstall<typeof Space>

_Space.install = app => {
  app.component(_Space.name, _Space)
}

export default _Space
