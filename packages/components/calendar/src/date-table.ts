import { buildProps, definePropType } from '@element-plus/utils/props'
import { isObject } from '@element-plus/utils/util'
import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const dateTableProps = buildProps({
  selectedDay: {
    type: definePropType<Dayjs>(Object),
  },
  range: {
    type: definePropType<[Dayjs, Dayjs]>(Array),
  },
  date: {
    type: definePropType<Dayjs>(Object),
    required: true,
  },
  hideHeader: {
    type: Boolean,
  },
} as const)
export type DateTableProps = ExtractPropTypes<typeof dateTableProps>

export const dateTableEmits = {
  pick: (value: Dayjs) => isObject(value),
}
export type DateTableEmits = typeof dateTableEmits
