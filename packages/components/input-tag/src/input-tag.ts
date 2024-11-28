import {
  buildProps,
  definePropType,
  isArray,
  isString,
  isUndefined,
} from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { tagProps } from '@element-plus/components/tag/src/tag'

import type { ExtractPropTypes } from 'vue'

export const inputTagProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<string[]>(Array),
  },
  /**
   * @description max number tags that can be enter
   */
  max: Number,
  /**
   * @description tag type
   */
  tagType: { ...tagProps.type, default: 'info' },
  /**
   * @description tag effect
   */
  tagEffect: tagProps.effect,
  /**
   * @description the key to trigger input tag
   */
  trigger: {
    type: definePropType<'Enter' | 'Space'>(String),
    default: EVENT_CODE.enter,
  },
  /**
   * @description whether tags can be dragged
   */
  draggable: {
    type: Boolean,
    default: false,
  },
  /**
   * @description input box size
   */
  size: useSizeProp,
  /**
   * @description whether to show clear button
   */
  clearable: Boolean,
  /**
   * @description whether to disable input-tag
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description native input readonly
   */
  readonly: Boolean,
  /**
   * @description native input autofocus
   */
  autofocus: Boolean,
  /**
   * @description same as `id` in native input
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description same as `tabindex` in native input
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
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
   * @description placeholder of input
   */
  placeholder: String,
  /**
   * @description native input autocomplete
   */
  autocomplete: {
    type: String,
    default: 'off',
  },
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel: String,
} as const)
export type InputTagProps = ExtractPropTypes<typeof inputTagProps>

export const inputTagEmits = {
  [UPDATE_MODEL_EVENT]: (value?: string[]) =>
    isArray(value) || isUndefined(value),
  [CHANGE_EVENT]: (value?: string[]) => isArray(value) || isUndefined(value),
  [INPUT_EVENT]: (value: string) => isString(value),
  'add-tag': (value: string) => isString(value),
  'remove-tag': (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
}
export type InputTagEmits = typeof inputTagEmits
