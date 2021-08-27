import Pagination from './src'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Pagination = Pagination as SFCWithInstall<typeof Pagination>

_Pagination.install = (app: App) => {
  app.component(_Pagination.name, _Pagination)
}

export default _Pagination
export const ElPagination = _Pagination

export * from './src/pagination'
