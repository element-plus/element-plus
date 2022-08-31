import { buildProps, iconPropType } from '@element-plus/utils'
import type Step from './item.vue'
import type { ExtractPropTypes } from 'vue'

export const stepProps = buildProps({
  title: {
    type: String,
    default: '',
  },
  icon: {
    type: iconPropType,
  },
  description: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    values: ['', 'wait', 'process', 'finish', 'error', 'success'],
    default: '',
  },
} as const)

export type StepProps = ExtractPropTypes<typeof stepProps>

export type StepInstance = InstanceType<typeof Step>
