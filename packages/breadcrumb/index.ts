import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Breadcrumb from './src/index.vue'

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
}

const _Breadcrumb: SFCWithInstall<typeof Breadcrumb> = Breadcrumb

export default _Breadcrumb
