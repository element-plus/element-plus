import { ExtractPublicPropTypes } from 'vue'
import { componentSizes } from '@element-plus/constants'
import {
  buildProps,
  definePropType,
  isArray,
  isBoolean,
  isString,
} from '@element-plus/utils'

import type { ComponentSize } from '@element-plus/constants'
import type { FormItemProp } from './form-item'
import type { FormRules } from './types'

export interface FormMetaProps {
  /**
   * @description Control the size of components in this form.
   */
  size?: ComponentSize
  /**
   * @description Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
   */
  disabled?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `FormMetaProps` instead.
 */
export const formMetaProps = buildProps({
  /**
   * @description Control the size of components in this form.
   */
  size: {
    type: String,
    values: componentSizes,
  },
  /**
   * @description Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
   */
  disabled: Boolean,
} as const)

export interface FormProps extends FormMetaProps {
  /**
   * @description Data of form component.
   */
  model?: Record<string, any>
  /**
   * @description Validation rules of form.
   */
  rules?: FormRules
  /**
   * @description Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.
   */
  labelPosition?: 'left' | 'right' | 'top'
  /**
   * @description Position of asterisk.
   */
  requireAsteriskPosition?: 'left' | 'right'
  /**
   * @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.
   */
  labelWidth?: string | number
  /**
   * @description Suffix of the label.
   */
  labelSuffix?: string
  /**
   * @description Whether the form is inline.
   */
  inline?: boolean
  /**
   * @description Whether to display the error message inline with the form item.
   */
  inlineMessage?: boolean
  /**
   * @description Whether to display an icon indicating the validation result.
   */
  statusIcon?: boolean
  /**
   * @description Whether to show the error message.
   */
  showMessage?: boolean
  /**
   * @description Whether to trigger validation when the `rules` prop is changed.
   */
  validateOnRuleChange?: boolean
  /**
   * @description Whether to hide required fields should have a red asterisk (star) beside their labels.
   */
  hideRequiredAsterisk?: boolean
  /**
   * @description When validation fails, scroll to the first error form entry.
   */
  scrollToError?: boolean
  /**
   * @description When validation fails, it scrolls to the first error item based on the scrollIntoView option.
   */
  scrollIntoViewOptions?: ScrollIntoViewOptions | boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `FormProps` instead.
 */
export const formProps = buildProps({
  ...formMetaProps,
  /**
   * @description Data of form component.
   */
  model: Object,
  /**
   * @description Validation rules of form.
   */
  rules: {
    type: definePropType<FormRules>(Object),
  },
  /**
   * @description Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.
   */
  labelPosition: {
    type: String,
    values: ['left', 'right', 'top'],
    default: 'right',
  },
  /**
   * @description Position of asterisk.
   */
  requireAsteriskPosition: {
    type: String,
    values: ['left', 'right'],
    default: 'left',
  },
  /**
   * @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.
   */
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description Suffix of the label.
   */
  labelSuffix: {
    type: String,
    default: '',
  },
  /**
   * @description Whether the form is inline.
   */
  inline: Boolean,
  /**
   * @description Whether to display the error message inline with the form item.
   */
  inlineMessage: Boolean,
  /**
   * @description Whether to display an icon indicating the validation result.
   */
  statusIcon: Boolean,
  /**
   * @description Whether to show the error message.
   */
  showMessage: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Whether to trigger validation when the `rules` prop is changed.
   */
  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Whether to hide required fields should have a red asterisk (star) beside their labels.
   */
  hideRequiredAsterisk: Boolean,
  /**
   * @description When validation fails, scroll to the first error form entry.
   */
  scrollToError: Boolean,
  /**
   * @description When validation fails, it scrolls to the first error item based on the scrollIntoView option.
   */
  scrollIntoViewOptions: {
    type: definePropType<ScrollIntoViewOptions | boolean>([Object, Boolean]),
    default: true,
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `FormProps` instead.
 */
export type FormPropsPublic = ExtractPublicPropTypes<typeof formProps>

/**
 * @deprecated Removed after 3.0.0, Use `FormMetaProps` instead.
 */
export type FormMetaPropsPublic = ExtractPublicPropTypes<typeof formMetaProps>

export const formEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) &&
    isBoolean(isValid) &&
    isString(message),
}
export type FormEmits = typeof formEmits
