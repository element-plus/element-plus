import { buildProps } from '@element-plus/utils'
import { panelRangeSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'

export const panelYearRangeProps = buildProps({
  ...panelRangeSharedProps,
} as const)

export const panelYearRangeEmits = [
  'pick',
  'set-picker-option',
  'calendar-change',
]

export type PanelYearRangeProps = ExtractPropTypes<typeof panelYearRangeProps>
