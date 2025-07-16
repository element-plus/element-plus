import { buildProps, definePropType } from '@element-plus/utils'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const basicYearTableProps = buildProps({
  ...datePickerSharedProps,
  cellClassName: {
    type: definePropType<(date: Date) => string>(Function),
  },
  selectionMode: selectionModeWithDefault('year'),
} as const)

export type BasicYearTableProps = ExtractPropTypes<typeof basicYearTableProps>
export type BasicYearTablePropsPublic = __ExtractPublicPropTypes<
  typeof basicYearTableProps
>
