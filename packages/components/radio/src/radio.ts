import { buildProps, isBoolean, isNumber, isString } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useSizeProp } from '@element-plus/hooks'
import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'

export const radioPropsBase = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * @description size of the Radio
   */
  size: useSizeProp,
  /**
   * @description whether Radio is disabled
   */
  disabled: Boolean,
  /**
   * @description the label of Radio
   */
  label: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * @description the value of Radio
   */
  value: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * @description native `name` attribute
   */
  name: {
    type: String,
    default: undefined,
  },
})

export const radioProps = buildProps({
  ...radioPropsBase,
  /**
   * @description whether to add a border around Radio
   */
  border: Boolean,
} as const)

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
export type RadioInstance = InstanceType<typeof Radio>
