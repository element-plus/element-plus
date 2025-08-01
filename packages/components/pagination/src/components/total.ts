import { buildProps } from '@element-plus/utils'

import type Total from './total.vue'
import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const paginationTotalProps = buildProps({
  total: {
    type: Number,
    default: 1000,
  },
} as const)

export type PaginationTotalProps = ExtractPropTypes<typeof paginationTotalProps>
export type PaginationTotalPropsPublic = __ExtractPublicPropTypes<
  typeof paginationTotalProps
>

export type TotalInstance = InstanceType<typeof Total> & unknown
