import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Alert from './src/index.vue'

Alert.install = (app: App): void => {
  app.component(Alert.name, Alert)
}

const _Alert: SFCWithInstall<typeof Alert> = Alert

export default _Alert
