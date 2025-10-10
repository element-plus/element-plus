import { buildProps } from '@element-plus/utils'
import { radioPropsBase } from './radio'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type RadioButton from './radio-button.vue'

export const radioButtonProps = buildProps({
  ...radioPropsBase,
} as const)

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
export type RadioButtonPropsPublic = ExtractPublicPropTypes<
  typeof radioButtonProps
>
export type RadioButtonInstance = InstanceType<typeof RadioButton> & unknown
