import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const badgeProps = {
  value: buildProp<string | number>({
    type: [String, Number],
    default: '',
  }),
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
