import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const panelTimePickerProps = buildProps({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: undefined,
  },
  datetimeRole: String,
  parsedValue: {
    type: definePropType<string | Dayjs>([Object, String]),
  },
  format: {
    type: String,
    default: '',
  },
} as const)

export type PanelTimePickerProps = ExtractPropTypes<typeof panelTimePickerProps>
