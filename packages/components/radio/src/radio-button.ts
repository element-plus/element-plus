import { buildProps } from '@element-plus/utils'
import { radioPropsBase } from './radio'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type RadioButton from './radio-button.vue'

export const radioButtonProps = buildProps({
  ...radioPropsBase,
} as const)

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
export type RadioButtonPropsPublic = __ExtractPublicPropTypes<
  typeof radioButtonProps
>
export type RadioButtonInstance = InstanceType<typeof RadioButton> & unknown
