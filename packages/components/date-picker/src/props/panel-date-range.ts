import { buildProps, definePropType } from '@element-plus/utils'
import { panelRangeSharedProps, panelSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps,
  oldValue: {
    type: definePropType<undefined | Dayjs | Dayjs[]>([Object, Array]),
  },
} as const)

export type PanelDateRangeProps = ExtractPropTypes<typeof panelDateRangeProps>
