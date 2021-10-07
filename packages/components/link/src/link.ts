import { buildProps } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const linkProps = buildProps({
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
    default: 'default',
  },
  underline: {
    type: Boolean,
    default: true,
  },
  disabled: { type: Boolean, default: false },
  href: { type: String, default: '' },
  icon: { type: String, default: '' },
} as const)
export type LinkProps = ExtractPropTypes<typeof linkProps>

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type LinkEmits = typeof linkEmits
