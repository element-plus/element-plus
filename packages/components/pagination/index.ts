import { withInstall } from '@element-plus/utils'
import Pagination from './src/pagination'

import type { SFCWithInstall } from '@element-plus/utils'

export const GPagination: SFCWithInstall<typeof Pagination> =
  withInstall(Pagination)
export default GPagination

export * from './src/pagination'
export * from './src/constants'
