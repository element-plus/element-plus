import { withInstall } from '@element-plus/utils'

import Pagination from './src/pagination'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElPagination: SFCWithInstall<typeof Pagination> =
  withInstall(Pagination)
export default ElPagination

export * from './src/pagination'
export * from './src/constants'
