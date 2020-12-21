import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Aside from '../container/src/aside.vue'

Aside.install = (app: App): void => {
  app.component(Aside.name, Aside)
}

const _Aside: SFCWithInstall<typeof Aside> = Aside

export default _Aside

