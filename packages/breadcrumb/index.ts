import { App } from 'vue'
import Breadcrumb from './src/index.vue'
import BreadcrumbItem from './src/item.vue'
export default (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}
