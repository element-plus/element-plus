import { timePickerDefaultProps } from '@element-plus/components/time-picker'
import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { DatePickerType } from '@element-plus/components/date-picker-panel/src/types'

export const datePickerProps = buildProps({
  ...timePickerDefaultProps,
  /**
   * @description type of the picker
   */
  type: {
    type: definePropType<DatePickerType>(String),
    default: 'date',
  },
} as const)

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>
export type DatePickerPropsPublic = __ExtractPublicPropTypes<
  typeof datePickerProps
>
