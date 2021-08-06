import Notify from './src/notify'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Notify = Notify as SFCWithInstall<typeof Notify>

_Notify.install = (app: App) => {
  app.config.globalProperties.$notify = _Notify
}

export default _Notify
export const ElNotification = _Notify

export * from './src/notification.type'
