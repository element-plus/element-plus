import { buildProps, definePropType } from '@element-plus/utils'
import { timePanelSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const panelTimePickerProps = buildProps({
  ...timePanelSharedProps,
  datetimeRole: String,
  parsedValue: {
    type: definePropType<Dayjs>(Object),
  },
  oldValue: {
    type: definePropType<undefined | Dayjs | Dayjs[]>([Object, Array]),
  },
} as const)

export type PanelTimePickerProps = ExtractPropTypes<typeof panelTimePickerProps>
