import { buildProps, definePropType } from '@element-plus/utils'
import { panelSharedProps } from './shared'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { DayOrDays } from '@element-plus/components/time-picker'

export const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType<DayOrDays>([Object, Array]),
  },
  visible: {
    type: Boolean,
    default: true,
  },
  format: {
    type: String,
    default: '',
  },
} as const)

export type PanelDatePickProps = ExtractPropTypes<typeof panelDatePickProps>
export type PanelDatePickPropsPublic = __ExtractPublicPropTypes<
  typeof panelDatePickProps
>
