import { buildProps } from '@element-plus/utils'
import { datePickerSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'

const { date, disabledDate, parsedValue } = datePickerSharedProps

export const basicQuarterTableProps = buildProps({
  date,
  disabledDate,
  parsedValue,
})

export type BasicQuarterTableProps = ExtractPropTypes<
  typeof basicQuarterTableProps
>
