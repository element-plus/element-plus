import {
  buildProps,
  definePropType,
  isObject,
  isString,
} from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const selectControllerProps = buildProps({
  date: {
    type: definePropType<Dayjs>(Object),
    required: true,
  },
  formatter: {
    type: definePropType<(value: number, type: string) => string | number>(
      Function
    ),
  },
} as const)
export type SelectControllerProps = ExtractPropTypes<
  typeof selectControllerProps
>
export type SelectControllerPropsPublic = __ExtractPublicPropTypes<
  typeof selectControllerProps
>

export const selectControllerEmits = {
  'date-change': (value: Dayjs | 'today') => isObject(value) || isString(value),
}
export type SelectControllerEmits = typeof selectControllerEmits
