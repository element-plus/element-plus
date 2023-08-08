import { buildProps, definePropType } from '@element-plus/utils'
import { timePanelSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const panelTimeRangeProps = buildProps({
  ...timePanelSharedProps,
  parsedValue: {
    type: definePropType<[Dayjs, Dayjs]>(Array),
  },
  oldValue: {
    type: definePropType<undefined | Dayjs | Dayjs[]>([Object, Array]),
  },
} as const)

export type PanelTimeRangeProps = ExtractPropTypes<typeof panelTimeRangeProps>
