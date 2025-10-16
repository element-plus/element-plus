import { buildProps } from '@element-plus/utils'
import { panelRangeSharedProps } from './shared'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps,
} as const)

export const panelMonthRangeEmits = [
  'pick',
  'set-picker-option',
  'calendar-change',
]

export type PanelMonthRangeProps = ExtractPropTypes<typeof panelMonthRangeProps>
export type PanelMonthRangePropsPublic = __ExtractPublicPropTypes<
  typeof panelMonthRangeProps
>
