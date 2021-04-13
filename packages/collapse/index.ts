import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Collapse from './src/collapse.vue'

Collapse.install = (app: App): void => {
  app.component(Collapse.name, Collapse)
}

const _Collapse: SFCWithInstall<typeof Collapse> = Collapse

export default _Collapse
