import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Scrollbar from './src/index.vue'

Scrollbar.install = (app: App): void => {
  app.component(Scrollbar.name, Scrollbar)
}

const _Scrollbar: SFCWithInstall<typeof Scrollbar> = Scrollbar

export default _Scrollbar
