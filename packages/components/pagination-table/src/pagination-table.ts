import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type PaginationTable from './pagination-table.vue'

export const paginationTableProps = buildProps({
  /**
   * @description whether load the data at-once
   */
  image: {
    type: Boolean,
    default: false,
  },
} as const)
export type PaginationTableProps = ExtractPropTypes<typeof paginationTableProps>
export type PaginationTablePropsPublic = __ExtractPublicPropTypes<
  typeof paginationTableProps
>
export type PaginationTableInstance = InstanceType<typeof PaginationTable> &
  unknown
