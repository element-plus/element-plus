import { buildProps } from '@element-plus/utils'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

import type { ExtractPropTypes } from 'vue'

const { date, disabledDate, parsedValue } = datePickerSharedProps

export const basicYearTableProps = buildProps({
  date,
  disabledDate,
  parsedValue,
  selectionMode: selectionModeWithDefault('year'),
} as const)

export type BasicYearTableProps = ExtractPropTypes<typeof basicYearTableProps>
