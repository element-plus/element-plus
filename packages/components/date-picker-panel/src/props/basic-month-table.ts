import { buildProps } from '@element-plus/utils'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const basicMonthTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault('month'),
})

export type BasicMonthTableProps = ExtractPropTypes<typeof basicMonthTableProps>
export type BasicMonthTablePropsPublic = __ExtractPublicPropTypes<
  typeof basicMonthTableProps
>
