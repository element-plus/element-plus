import { App } from 'vue'
import Skeleton from './src/index.vue'

Skeleton.install = (app: App): void => {
  app.component(Skeleton.name, Skeleton)
}

export default Skeleton
