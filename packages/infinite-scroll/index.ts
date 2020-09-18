import { App } from 'vue'

import InfiniteScroll from './src/index'

export default (app: App): void => {
  app.directive('infinite-scroll', InfiniteScroll)
}
