import { buildProps, isBoolean, isNumber, isString } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useSizeProp } from '@element-plus/hooks'
import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'

export const radioPropsBase = buildProps({
  /**
   * @description size of the Raido
   */
  size: useSizeProp,
  /**
   * @description whether Raido is disabled
   */
  disabled: Boolean,
  /**
   * @description the value of Raido
   */
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
})

export const radioProps = buildProps({
  ...radioPropsBase,
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  /**
   * @description native `name` attribute
   */
  name: {
    type: String,
    default: '',
  },
  /**
   * @description whether to add a border around Raido
   */
  border: Boolean,
} as const)

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
export type RadioInstance = InstanceType<typeof Radio>
