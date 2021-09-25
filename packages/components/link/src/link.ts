import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const linkProps = {
  type: buildProp({
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
    default: 'default',
  } as const),
  underline: {
    type: Boolean,
    default: true,
  },
  disabled: { type: Boolean, default: false },
  href: { type: String, default: '' },
  icon: { type: String, default: '' },
} as const
export type LinkProps = ExtractPropTypes<typeof linkProps>

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type LinkEmits = typeof linkEmits
