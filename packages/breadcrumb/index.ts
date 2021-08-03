import { App } from 'vue'
import Breadcrumb from './src/index.vue'
import BreadcrumbItem from './src/item.vue'

import type { SFCWithInstall } from '@element-plus/utils/types'

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

const _Breadcrumb: SFCWithInstall<typeof Breadcrumb> = Breadcrumb

export default _Breadcrumb

export {
  Breadcrumb,
  BreadcrumbItem,
}
