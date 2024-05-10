import { withInstall, withNoopInstall } from '@element-plus/utils'

import Breadcrumb from './src/breadcrumb.vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'

export const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem,
})
export const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem)
export default ElBreadcrumb

export * from './src/breadcrumb'
export * from './src/breadcrumb-item'
export * from './src/constants'
export type {
  BreadcrumbInstance,
  BreadcrumbItemInstance,
} from './src/instances'
