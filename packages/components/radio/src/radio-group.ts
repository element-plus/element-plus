import { buildProps, definePropType } from '@element-plus/utils'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import { radioEmits } from './radio'

import type { ComponentSize } from '@element-plus/constants'
import type { ExtractPublicPropTypes } from 'vue'
import type RadioGroup from './radio-group.vue'

export type radioOptionProp = {
  value?: string
  label?: string
  disabled?: string
}

export const radioDefaultProps: Required<radioOptionProp> = {
  label: 'label',
  value: 'value',
  disabled: 'disabled',
}

export type radioOption = Record<string, any>

export interface RadioGroupProps {
  /**
   * @description native `id` attribute
   */
  id?: string
  /**
   * @description the size of radio buttons or bordered radios
   */
  size?: ComponentSize
  /**
   * @description whether the nesting radios are disabled
   */
  disabled?: boolean
  /**
   * @description binding value
   */
  modelValue?: string | number | boolean
  /**
   * @description border and background color when button is active
   */
  fill?: string
  /**
   * @description font color when button is active
   */
  textColor?: string
  /**
   * @description native `name` attribute
   */
  name?: string
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
  /**
   * @description radio options
   */
  options?: radioOption[]
  /**
   * @description custom prop names for options
   */
  props?: radioOptionProp
  /**
   * @description radio type
   */
  type?: 'radio' | 'button'
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `RadioGroupProps` instead.
 */
export const radioGroupProps = buildProps({
  /**
   * @description native `id` attribute
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description the size of radio buttons or bordered radios
   */
  size: useSizeProp,
  /**
   * @description whether the nesting radios are disabled
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * @description border and background color when button is active
   */
  fill: {
    type: String,
    default: '',
  },
  /**
   * @description font color when button is active
   */
  textColor: {
    type: String,
    default: '',
  },
  /**
   * @description native `name` attribute
   */
  name: {
    type: String,
    default: undefined,
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  options: {
    type: definePropType<radioOption[]>(Array),
  },
  props: {
    type: definePropType<radioOptionProp>(Object),
    default: () => radioDefaultProps,
  },
  type: {
    type: String,
    values: ['radio', 'button'] as const,
    default: 'radio',
  },
  ...useAriaProps(['ariaLabel']),
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `RadioGroupProps` instead.
 */
export type RadioGroupPropsPublic = ExtractPublicPropTypes<
  typeof radioGroupProps
>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
export type RadioGroupInstance = InstanceType<typeof RadioGroup> & unknown

/**
 * @description default values for RadioGroupProps
 */
export const radioGroupPropsDefaults = {
  id: undefined,
  disabled: undefined,
  modelValue: undefined,
  fill: '',
  textColor: '',
  name: undefined,
  validateEvent: true,
  props: () => radioDefaultProps,
  type: 'radio',
} as const
