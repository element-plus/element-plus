import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { DateCell } from '../date-picker.type'

export const basicCellProps = buildProps({
  cell: {
    type: definePropType<DateCell>(Object),
  },
} as const)

export type BasicCellProps = ExtractPropTypes<typeof basicCellProps>
export type BasicCellPropsPublic = __ExtractPublicPropTypes<
  typeof basicCellProps
>
