import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import BreadcrumbItem from '../breadcrumb/src/item.vue'

BreadcrumbItem.install = (app: App): void => {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

const _BreadcrumbItem: SFCWithInstall<typeof BreadcrumbItem> = BreadcrumbItem

export default _BreadcrumbItem
