import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Collapse from './src/collapse.vue'

Collapse.install = (app: App): void => {
  app.component(Collapse.name, Collapse)
}

const _Collapse: SFCWithInstall<typeof Collapse> = Collapse

export default _Collapse
