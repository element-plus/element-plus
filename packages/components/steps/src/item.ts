import { buildProps, iconPropType } from '@element-plus/utils'

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
    default: '',
    values: ['', 'wait', 'process', 'finish', 'error', 'success'] as const,
  },
} as const)
export type StepProps = ExtractPropTypes<typeof stepProps>
