import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Affix from './src/index.vue'

Affix.install = (app: App): void => {
  app.component(Affix.name, Affix)
}

const _Affix: SFCWithInstall<typeof Affix> = Affix

export default _Affix
