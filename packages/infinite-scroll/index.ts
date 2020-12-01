import { App } from 'vue'
import InfiniteScroll from './src/index'

(InfiniteScroll as any).install = (app: App): void => {
  app.directive('InfiniteScroll', InfiniteScroll)
}

export default InfiniteScroll
