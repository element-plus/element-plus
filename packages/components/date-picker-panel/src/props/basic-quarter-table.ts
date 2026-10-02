import { buildProps } from '@element-plus/utils'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export const basicQuarterTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault('quarter'),
})

export type BasicQuarterTableProps = ExtractPropTypes<
  typeof basicQuarterTableProps
>
export type BasicQuarterTablePropsPublic = ExtractPublicPropTypes<
  typeof basicQuarterTableProps
>
