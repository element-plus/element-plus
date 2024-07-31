import { buildProps } from '@element-plus/utils'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

import type { ExtractPropTypes } from 'vue'

export const basicYearTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault('year'),
} as const)

export type BasicYearTableProps = ExtractPropTypes<typeof basicYearTableProps>
