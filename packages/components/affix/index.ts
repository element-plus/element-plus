import Affix from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Affix.install = (app: App): void => {

  app.component(Affix.name, Affix)
}

const _Affix = Affix as SFCWithInstall<typeof Affix>

export default _Affix
export const ElAffix = _Affix
