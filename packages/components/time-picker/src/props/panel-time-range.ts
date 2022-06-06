import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const panelTimeRangeProps = buildProps({
  visible: Boolean,
  actualVisible: Boolean,
  parsedValue: {
    type: definePropType<Dayjs[]>(Array),
  },
  format: {
    type: String,
    default: '',
  },
} as const)

export type PanelTimeRangeProps = ExtractPropTypes<typeof panelTimeRangeProps>
