import { isArray, isNumber, isString, isUndefined } from '@element-plus/utils'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'

import type { PopperEffect } from '@element-plus/components/popper'

/**
 * @description input-tag component props
 */
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
  tagType?: 'success' | 'info' | 'warning' | 'danger' | 'primary'
  /**
   * @description tag effect
   */
  tagEffect?: 'light' | 'dark' | 'plain'
  /**
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect?: PopperEffect
  /**
   * @description the key to trigger input tag
   */
  trigger?: string
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
  size?: '' | 'large' | 'default' | 'small'
  /**
   * @description whether to show clear button
   */
  clearable?: boolean
  /**
   * @description custom clear icon component
   */
  clearIcon?: any
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
   */
  autocomplete?: HTMLInputElement['autocomplete']
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

export type InputTagPropsPublic = InputTagProps

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
