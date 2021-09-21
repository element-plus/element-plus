import { withInstall } from '@element-plus/utils/with-install'

import Breadcrumb from './src/breadcrumb.vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'

export const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem,
})
export const ElBreadcrumbItem = BreadcrumbItem
export default ElBreadcrumb

export * from './src/breadcrumb'
export * from './src/breadcrumb-item'
