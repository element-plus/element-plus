import { buildProps, definePropType } from '@element-plus/utils/props'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import type { ExtractPropTypes } from 'vue'

export const calendarProps = buildProps({
  modelValue: {
    type: Date,
  },
  range: {
    type: definePropType<Array<Date>>(Array),
    validator: (range: Date): boolean => {
      if (Array.isArray(range)) {
        return range.length === 2 && range.every((item) => item instanceof Date)
      }
      return false
    },
  },
} as const)

export type CalendarProps = ExtractPropTypes<typeof calendarProps>

export const calendarEmits = {
  [UPDATE_MODEL_EVENT]: (value: Date) => value instanceof Date,
  input: (value: Date) => value instanceof Date,
}

export type CalendarEmits = typeof calendarEmits
