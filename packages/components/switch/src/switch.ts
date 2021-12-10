import { buildProps, definePropType } from '@element-plus/utils/props'
import {
  UPDATE_MODEL_EVENT,
  CHANGE_EVENT,
  INPUT_EVENT,
} from '@element-plus/utils/constants'
import { isBool, isNumber, isString } from '@element-plus/utils/util'
import type Switch from './switch.vue'
import type { Component, ExtractPropTypes } from 'vue'

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
    type: Number,
    default: 40,
  },
  inlinePrompt: {
    type: Boolean,
    default: false,
  },
  activeIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: '',
  },
  inactiveIcon: {
    type: definePropType<string | Component>([String, Object]),
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
} as const)

export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val: boolean | string | number) =>
    isBool(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val: boolean | string | number) =>
    isBool(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val: boolean | string | number) =>
    isBool(val) || isString(val) || isNumber(val),
}
export type SwitchEmits = typeof switchEmits

export type SwitchInstance = InstanceType<typeof Switch>
