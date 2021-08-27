import Alert from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Alert.install = (app: App): void => {
  app.component(Alert.name, Alert)
}

const _Alert = Alert as SFCWithInstall<typeof Alert>

export default _Alert
export const ElAlert = _Alert
