import {
  buildProps,
  definePropType,
  iconPropType,
  isBoolean,
  isNumber,
  isString,
  isValidComponentSize,
} from '@element-plus/utils'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import type { ComponentSize } from '@element-plus/constants'
import type Switch from './switch.vue'
import type { ExtractPropTypes, PropType } from 'vue'

export const switchProps = buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  value: {
    type: [Boolean, String, Number],
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [String, Number],
    default: '',
  },
  inlinePrompt: {
    type: Boolean,
    default: false,
  },
  activeIcon: {
    type: iconPropType,
    default: '',
  },
  inactiveIcon: {
    type: iconPropType,
    default: '',
  },
  activeText: {
    type: String,
    default: '',
  },
  inactiveText: {
    type: String,
    default: '',
  },
  activeColor: {
    type: String,
    default: '',
  },
  inactiveColor: {
    type: String,
    default: '',
  },
  borderColor: {
    type: String,
    default: '',
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  id: String,
  loading: {
    type: Boolean,
    default: false,
  },
  beforeChange: {
    type: definePropType<() => Promise<boolean> | boolean>(Function),
  },
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize,
  },
  tabindex: {
    type: [String, Number],
  },
} as const)

export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
}
export type SwitchEmits = typeof switchEmits

export type SwitchInstance = InstanceType<typeof Switch>
