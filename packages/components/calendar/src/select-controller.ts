import {
  buildProps,
  definePropType,
  isObject,
  isString,
} from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export interface SelectControllerProps {
  date: Dayjs
  formatter?: (value: number, type: 'year' | 'month') => string | number
}

export const selectControllerProps = buildProps({
  date: {
    type: definePropType<Dayjs>(Object),
    required: true,
  },
  formatter: {
    type: definePropType<
      (value: number, type: 'year' | 'month') => string | number
    >(Function),
  },
} as const)
export type SelectControllerPropsPublic = ExtractPublicPropTypes<
  typeof selectControllerProps
>

export const selectControllerEmits = {
  'date-change': (date: Dayjs | 'today') => isObject(date) || isString(date),
}
export type SelectControllerEmits = typeof selectControllerEmits
