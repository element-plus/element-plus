import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { buildProps, isBoolean, isNumber, isString } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type CheckboxButton from './checkbox-button.vue'

export const checkboxButtonProps = buildProps({
  label: {
    type: [String, Boolean, Number, Object],
  },
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: undefined,
  },
  trueLabel: {
    type: [String, Number],
    default: undefined,
  },
  falseLabel: {
    type: [String, Number],
    default: undefined,
  },
})

export const checkboxButtonEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxButtonProps = ExtractPropTypes<typeof checkboxButtonProps>
export type CheckboxButtonEmits = typeof checkboxButtonEmits
export type CheckboxButtonInstance = InstanceType<typeof CheckboxButton>
