import { withInstall } from '@element-plus/utils'
import PaginationTable from './src/pagination-table.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElPaginationTable: SFCWithInstall<typeof PaginationTable> =
  withInstall(PaginationTable)
export default ElPaginationTable

export * from './src/pagination-table'
