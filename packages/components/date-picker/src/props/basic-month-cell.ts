import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { MonthCell } from '../date-picker.type'

export const basicCellProps = buildProps({
  cell: {
    type: definePropType<MonthCell>(Object),
  },
} as const)

export type BasicCellProps = ExtractPropTypes<typeof basicCellProps>
