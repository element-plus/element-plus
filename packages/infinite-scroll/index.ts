import InfiniteScroll from './src/index'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _InfiniteScroll: SFCWithInstall<typeof InfiniteScroll> = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>

_InfiniteScroll.install = app => {
  app.directive('InfiniteScroll', _InfiniteScroll)
}

export default _InfiniteScroll
