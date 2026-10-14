import { buildProps } from '@element-plus/utils'
import { radioPropsBase } from './radio'

import type { ExtractPublicPropTypes } from 'vue'
import type { RadioPropsBase } from './radio'
import type RadioButton from './radio-button.vue'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RadioButtonProps extends RadioPropsBase {}

/**
 * @deprecated Removed after 3.0.0, Use `RadioButtonProps` instead.
 */
export const radioButtonProps = buildProps({
  ...radioPropsBase,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `RadioButtonProps` instead.
 */
export type RadioButtonPropsPublic = ExtractPublicPropTypes<
  typeof radioButtonProps
>
export type RadioButtonInstance = InstanceType<typeof RadioButton> & unknown

/**
 * @description default values for RadioButtonProps
 */
export const radioButtonPropsDefaults = {
  modelValue: undefined,
  disabled: undefined,
  label: undefined,
  value: undefined,
  name: undefined,
} as const
