import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Divider from './src/index.vue'

Divider.install = (app: App): void => {
  app.component(Divider.name, Divider)
}

const _Divider: SFCWithInstall<typeof Divider> = Divider

export default _Divider
