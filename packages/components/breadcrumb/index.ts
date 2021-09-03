import Breadcrumb from './src/index.vue'
import BreadcrumbItem from './src/item.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

Breadcrumb.BreadcrumbItem = BreadcrumbItem

const _Breadcrumb = Breadcrumb as any as SFCWithInstall<typeof Breadcrumb> & {
  BreadcrumbItem: typeof BreadcrumbItem
}

export default _Breadcrumb
export const ElBreadcrumb = _Breadcrumb
export const ElBreadcrumbItem = BreadcrumbItem
