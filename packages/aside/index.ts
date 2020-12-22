import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Aside from '../container/src/aside.vue'

Aside.install = (app: App): void => {
  app.component(Aside.name, Aside)
}

const _Aside: SFCWithInstall<typeof Aside> = Aside

export default _Aside

