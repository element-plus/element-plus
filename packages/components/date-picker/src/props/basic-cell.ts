import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { DateCellRender } from '../date-picker.type'

export const basicCellProps = buildProps({
  cell: {
    type: definePropType<DateCellRender>(Object),
  },
} as const)

export type BasicCellProps = ExtractPropTypes<typeof basicCellProps>
