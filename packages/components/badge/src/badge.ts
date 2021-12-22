import { buildProps } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: '',
  },
  max: {
    type: Number,
    default: 99,
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger'],
    default: 'danger',
  },
} as const)
export type BadgeProps = ExtractPropTypes<typeof badgeProps>
