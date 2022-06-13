import { buildProps } from '@element-plus/utils'
import { radioEmits, radioPropsBase } from './radio'
import type { ExtractPropTypes } from 'vue'
import type RadioButton from './radio-button.vue'

export const radioButtonProps = buildProps({
  ...radioPropsBase,
} as const)

export const radioButtonEmits = radioEmits

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
export type RadioButtonEmits = typeof radioButtonEmits
export type RadioButtonInstance = InstanceType<typeof RadioButton>
