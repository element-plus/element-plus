import { buildProps } from '@element-plus/utils'
import { panelRangeSharedProps } from './shared'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export const panelQuarterRangeProps = buildProps({
  ...panelRangeSharedProps,
} as const)

export const panelQuarterRangeEmits = [
  'pick',
  'set-picker-option',
  'calendar-change',
]

export type PanelQuarterRangeProps = ExtractPropTypes<
  typeof panelQuarterRangeProps
>
export type PanelQuarterRangePropsPublic = ExtractPublicPropTypes<
  typeof panelQuarterRangeProps
>
