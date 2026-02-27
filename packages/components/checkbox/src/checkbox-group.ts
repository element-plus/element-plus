import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import { buildProps, definePropType, isArray } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type checkboxGroup from './checkbox-group.vue'
import type { CheckboxProps, CheckboxValueType } from './checkbox'
import type { ComponentSize } from '@element-plus/constants'
import type { AriaProps } from '@element-plus/hooks'

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]

export interface CheckboxGroupProps extends Pick<AriaProps, 'ariaLabel'> {
  /**
   * @description binding value
   */
  modelValue?: CheckboxGroupValueType
  /**
   * @description whether the nesting checkboxes are disabled
   */
  disabled?: boolean
  /**
   * @description minimum number of checkbox checked
   */
  min?: number
  /**
   * @description maximum number of checkbox checked
   */
  max?: number
  /**
   * @description size of checkbox
   */
  size?: ComponentSize
  /**
   * @description border and background color when button is active
   */
  fill?: string
  /**
   * @description font color when button is active
   */
  textColor?: string
  /**
   * @description element tag of the checkbox group
   */
  tag?: string
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
  /**
   * @description data of the options, the key of `value` and `label` and `disabled` can be customize by `props`
   */
  options?: CheckboxOption[]
  /**
   * @description configuration options
   */
  props?: CheckboxOptionProps
  /**
   * @description component type to render options (e.g. `'button'`)
   */
  type?: 'checkbox' | 'button'
}

/**
 * @deprecated Removed after 3.0.0, Use `CheckboxGroupProps` instead.
 */
export const checkboxGroupProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<CheckboxGroupValueType>(Array),
    default: () => [],
  },
  /**
   * @description whether the nesting checkboxes are disabled
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description minimum number of checkbox checked
   */
  min: Number,
  /**
   * @description maximum number of checkbox checked
   */
  max: Number,
  /**
   * @description size of checkbox
   */
  size: useSizeProp,
  /**
   * @description border and background color when button is active
   */
  fill: String,
  /**
   * @description font color when button is active
   */
  textColor: String,
  /**
   * @description element tag of the checkbox group
   */
  tag: {
    type: String,
    default: 'div',
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  options: {
    type: definePropType<CheckboxOption[]>(Array),
  },
  props: {
    type: definePropType<CheckboxOptionProps>(Object),
    default: () => checkboxDefaultProps,
  },
  type: {
    type: String,
    values: ['checkbox', 'button'] as const,
    default: 'checkbox',
  },
  ...useAriaProps(['ariaLabel']),
} as const)

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
  change: (val: CheckboxValueType[]) => isArray(val),
}

/**
 * @deprecated Removed after 3.0.0, Use `CheckboxGroupProps` instead.
 */
export type CheckboxGroupPropsPublic = ExtractPublicPropTypes<
  typeof checkboxGroupProps
>
export type CheckboxGroupEmits = typeof checkboxGroupEmits
export type CheckboxGroupInstance = InstanceType<typeof checkboxGroup> & unknown

export type CheckboxOption = CheckboxProps & Record<string, any>

type CheckboxOptionProps = {
  value?: string
  label?: string
  disabled?: string
}
export const checkboxDefaultProps: Required<CheckboxOptionProps> = {
  label: 'label',
  value: 'value',
  disabled: 'disabled',
}
