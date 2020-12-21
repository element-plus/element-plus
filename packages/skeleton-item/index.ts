import { App } from 'vue'
import SkeletonItem from './src/index.vue'

SkeletonItem.install = (app: App): void => {
  app.component(SkeletonItem.name, SkeletonItem)
}

export default SkeletonItem
