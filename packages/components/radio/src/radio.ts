import { buildProps, definePropType } from '@element-plus/utils/props'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { isBool, isString, isNumber } from '@element-plus/utils/util'
import type { ExtractPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'

export const radioProps = buildProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  disabled: Boolean,
  name: {
    type: String,
    default: '',
  },
  border: Boolean,
  size: {
    type: definePropType<ComponentSize>([String]),
    validator: isValidComponentSize,
  },
} as const)
export type RadioProps = ExtractPropTypes<typeof radioProps>

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBool(val),
  change: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBool(val),
}
export type RadioEmits = typeof radioEmits
