import { App } from 'vue'
import SkeletonItem from './src/skeleton-item.vue'

SkeletonItem.install = (app: App): void => {
  app.component(SkeletonItem.name, SkeletonItem)
}

export default SkeletonItem
