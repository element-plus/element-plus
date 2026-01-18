import {
  buildProps,
  definePropType,
  iconPropType,
  isArray,
  isNumber,
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
import { CircleClose } from '@element-plus/icons-vue'

import type { Component, ExtractPublicPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { PopperEffect } from '@element-plus/components/popper'
import type { TagProps } from '@element-plus/components/tag'

export interface InputTagProps {
  /**
   * @description binding value
   */
  modelValue?: string[]
  /**
   * @description max number tags that can be enter
   */
  max?: number
  /**
   * @description tag type
   */
  tagType?: TagProps['type']
  /**
   * @description tag effect
   */
  tagEffect?: TagProps['effect']
  /**
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect?: PopperEffect
  /**
   * @description the key to trigger input tag
   */
  trigger?: 'Enter' | 'Space'
  /**
   * @description whether tags can be dragged
   */
  draggable?: boolean
  /**
   * @description add a tag when a delimiter is matched
   */
  delimiter?: string | RegExp
  /**
   * @description input box size
   */
  size?: ComponentSize
  /**
   * @description whether to show clear button
   */
  clearable?: boolean
  /**
   * @description custom clear icon component
   */
  clearIcon?: string | Component
  /**
   * @description whether to disable input-tag
   */
  disabled?: boolean
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
  /**
   * @description native input readonly
   */
  readonly?: boolean
  /**
   * @description native input autofocus
   */
  autofocus?: boolean
  /**
   * @description same as `id` in native input
   */
  id?: string
  /**
   * @description same as `tabindex` in native input
   */
  tabindex?: string | number
  /**
   * @description same as `maxlength` in native input
   */
  maxlength?: string | number
  /**
   * @description same as `minlength` in native input
   */
  minlength?: string | number
  /**
   * @description placeholder of input
   */
  placeholder?: string
  /**
   * @description native input autocomplete
   * - When the number of literal types in a union exceeds 315, the TS2590 error occurs. see: https://github.com/vuejs/core/issues/10514
   */
  autocomplete?: string // HTMLInputElement['autocomplete']
  /**
   * @description whether to save the input value when the input loses focus
   */
  saveOnBlur?: boolean
  /**
   * @description whether to collapse tags to a text
   */
  collapseTags?: boolean
  /**
   * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
   */
  collapseTagsTooltip?: boolean
  /**
   * @description the max tags number to be shown. To use this, `collapse-tags` must be true
   */
  maxCollapseTags?: number
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `InputTagProps` instead.
 */
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
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    type: definePropType<PopperEffect>(String),
    default: 'light',
  },
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
  draggable: Boolean,
  /**
   * @description add a tag when a delimiter is matched
   */
  delimiter: {
    type: [String, RegExp],
    default: '',
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
   * @description custom clear icon component
   */
  clearIcon: {
    type: iconPropType,
    default: CircleClose,
  },
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
    type: definePropType<HTMLInputElement['autocomplete']>(String),
    default: 'off',
  },
  /**
   * @description whether to save the input value when the input loses focus
   */
  saveOnBlur: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to collapse tags to a text
   */
  collapseTags: Boolean,
  /**
   * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
   */
  collapseTagsTooltip: Boolean,
  /**
   * @description the max tags number to be shown. To use this, `collapse-tags` must be true
   */
  maxCollapseTags: {
    type: Number,
    default: 1,
  },
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel: String,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `InputTagProps` instead.
 */
export type InputTagPropsPublic = ExtractPublicPropTypes<typeof inputTagProps>

export const inputTagEmits = {
  [UPDATE_MODEL_EVENT]: (value?: string[]) =>
    isArray(value) || isUndefined(value),
  [CHANGE_EVENT]: (value?: string[]) => isArray(value) || isUndefined(value),
  [INPUT_EVENT]: (value: string) => isString(value),
  'add-tag': (value: string | string[]) => isString(value) || isArray(value),
  'remove-tag': (value: string, index: number) =>
    isString(value) && isNumber(index),
  'drag-tag': (oldIndex: number, newIndex: number, value: string) =>
    isNumber(oldIndex) && isNumber(newIndex) && isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
}
export type InputTagEmits = typeof inputTagEmits
