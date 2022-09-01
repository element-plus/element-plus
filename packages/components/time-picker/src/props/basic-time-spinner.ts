import { buildProps, definePropType } from '@element-plus/utils'
import { disabledTimeListsProps } from '../props/shared'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const basicTimeSpinnerProps = buildProps({
  role: {
    type: String,
    required: true,
  },
  spinnerDate: {
    type: definePropType<Dayjs>(Object),
    required: true,
  },
  showSeconds: {
    type: Boolean,
    default: true,
  },
  arrowControl: Boolean,
  amPmMode: {
    // 'a': am/pm; 'A': AM/PM
    type: definePropType<'a' | 'A' | ''>(String),
    default: '',
  },
  ...disabledTimeListsProps,
} as const)

export type BasicTimeSpinnerProps = ExtractPropTypes<
  typeof basicTimeSpinnerProps
>
