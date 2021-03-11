import Notify from './src/notify'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Notify: SFCWithInstall<typeof Notify> = Notify as SFCWithInstall<typeof Notify>

_Notify.install = app => {
  app.config.globalProperties.$notify = _Notify
}

export default _Notify
