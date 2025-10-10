import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type { DateCell } from '../types'

export const basicCellProps = buildProps({
  cell: {
    type: definePropType<DateCell>(Object),
  },
} as const)

export type BasicCellProps = ExtractPropTypes<typeof basicCellProps>
export type BasicCellPropsPublic = ExtractPublicPropTypes<typeof basicCellProps>
