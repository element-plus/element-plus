import type Breadcrumb from './breadcrumb.vue'
import type BreadcrumbItem from './breadcrumb-item.vue'

export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem> &
  unknown
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb> & unknown
