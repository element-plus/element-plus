import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const badgeProps = {
  value: buildProp({
    type: [String, Number],
    default: '',
  } as const),
  max: {
    type: Number,
    default: 99,
  },
  isDot: Boolean,
  hidden: Boolean,
  type: buildProp({
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger'],
    default: 'danger',
  } as const),
} as const
export type BadgeProps = ExtractPropTypes<typeof badgeProps>
