import {
  buildProps,
  definePropType,
  isArray,
  isString,
  isUndefined,
  mutable,
} from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { tagProps } from '@element-plus/components/tag/src/tag'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type InputTag from './input-tag.vue'

export const inputTagProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<string[]>([Array]),
  },
  /**
   * @description the key to trigger input tag
   */
  trigger: {
    type: definePropType<'Enter' | 'Space'>(String),
    default: EVENT_CODE.enter,
  },
  /**
   * @description max number tags that can be enter
   */
  max: Number,
  /**
   * @description native input id
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description input box size
   */
  size: useSizeProp,
  /**
   * @description whether to disable
   */
  disabled: Boolean,
  /**
   * @description same as `maxlength` in native input
   */
  maxlength: {
    type: [String, Number],
  },
  /**
   * @description same as `minlength` in native input
   */
  minlength: {
    type: [String, Number],
  },
  /**
   * @description native input autocomplete
   */
  autocomplete: {
    type: String,
    default: 'off',
  },
  /**
   * @description placeholder
   */
  placeholder: String,
  /**
   * @description native input form
   */
  form: String,
  /**
   * @description native input readonly
   */
  readonly: Boolean,
  /**
   * @description native input readonly
   */
  clearable: Boolean,
  /**
   * @description input tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description input or textarea element style
   */
  inputStyle: {
    type: definePropType<StyleValue>([Object, Array, String]),
    default: () => mutable({} as const),
  },
  /**
   * @description native input autofocus
   */
  autofocus: Boolean,
  /**
   * @description tag type
   */
  tagType: { ...tagProps.type, default: 'info' },
  /**
   * @description tag effect
   */
  tagEffect: tagProps.effect,
} as const)
export type InputTagProps = ExtractPropTypes<typeof inputTagProps>

export const inputTagEmits = {
  [UPDATE_MODEL_EVENT]: (value?: string[]) =>
    isArray(value) || isUndefined(value),
  [CHANGE_EVENT]: (value?: string[]) => isArray(value) || isUndefined(value),
  [INPUT_EVENT]: (value: string) => isString(value),
  tagAdd: (value: string) => isString(value),
  tagRemove: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
}
export type InputTagEmits = typeof inputTagEmits

export type InputTagInstance = InstanceType<typeof InputTag>
