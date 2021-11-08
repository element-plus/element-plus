import { buildProps, definePropType } from '@element-plus/utils/props'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import type { ExtractPropTypes } from '@vue/runtime-core'
import type { ComponentSize } from '@element-plus/utils/types'

export const checkboxGroupProps = buildProps({
  modelValue: {
    type: [Object, Boolean, Array],
    default: undefined,
  },
  disabled: Boolean,
  min: {
    type: Number,
    default: undefined,
  },
  max: {
    type: Number,
    default: undefined,
  },
  size: {
    type: definePropType<ComponentSize>(String),
    validator: isValidComponentSize,
  },
  fill: {
    type: String,
    default: undefined,
  },
  textColor: {
    type: String,
    default: undefined,
  },
} as const)

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: any) => val,
  [CHANGE_EVENT]: (val: any) => val,
}
export type CheckboxGroupEmits = typeof checkboxGroupEmits
