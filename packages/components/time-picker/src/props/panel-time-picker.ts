import { buildProps, definePropType } from '@element-plus/utils'
import { timePanelSharedProps } from './shared'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const panelTimePickerProps = buildProps({
  ...timePanelSharedProps,
  datetimeRole: String,
  parsedValue: {
    type: definePropType<Dayjs>(Object),
  },
} as const)

export type PanelTimePickerProps = ExtractPropTypes<typeof panelTimePickerProps>
export type PanelTimePickerPropsPublic = __ExtractPublicPropTypes<
  typeof panelTimePickerProps
>
