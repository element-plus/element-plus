import { buildProps, definePropType } from '@element-plus/utils'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

import type { ExtractPropTypes } from 'vue'

export const basicDateTableProps = buildProps({
  ...datePickerSharedProps,
  cellClassName: {
    type: definePropType<(date: Date) => string>(Function),
  },
  showWeekNumber: Boolean,
  selectionMode: selectionModeWithDefault('date'),
} as const)

export type BasicDateTableProps = ExtractPropTypes<typeof basicDateTableProps>
