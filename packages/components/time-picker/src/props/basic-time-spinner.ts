import { buildProps, definePropType } from '@element-plus/utils'

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
  disabledHours: {
    type: definePropType<(role: string, comparingDate?: Dayjs) => boolean[]>(
      Function
    ),
  },
  disabledMinutes: {
    type: definePropType<
      (hour: number, role: string, comparingDate?: Dayjs) => boolean[]
    >(Function),
  },
  disabledSeconds: {
    type: definePropType<
      (
        hour: number,
        minute: number,
        role: string,
        comparingDate?: Dayjs
      ) => boolean[]
    >(Function),
  },
} as const)

export type BasicTimeSpinnerProps = ExtractPropTypes<
  typeof basicTimeSpinnerProps
>
