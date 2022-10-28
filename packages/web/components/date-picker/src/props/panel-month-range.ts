import { buildProps } from '@element-plus/utils'
import { panelRangeSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'

export const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps,
} as const)

export const panelMonthRangeEmits = ['pick', 'set-picker-option']

export type PanelMonthRangeProps = ExtractPropTypes<typeof panelMonthRangeProps>
