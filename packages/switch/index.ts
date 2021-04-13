import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Switch from './src/index.vue'

Switch.install = (app: App): void => {
  app.component(Switch.name, Switch)
}

const _Switch: SFCWithInstall<typeof Switch> = Switch

export default _Switch
