import { App } from 'vue'
import BreadcrumbItem from '../breadcrumb/src/item.vue'

BreadcrumbItem.install = (app: App): void => {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

export default BreadcrumbItem
