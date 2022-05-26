import { buildProps, definePropType } from '@element-plus/utils'
import { panelSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  unlinkPanels: Boolean,
  parsedValue: {
    type: definePropType<Dayjs[]>(Array),
  },
} as const)

export type PanelDateRangeProps = ExtractPropTypes<typeof panelDateRangeProps>
