import { buildProps, definePropType } from '@element-plus/utils/props'
import type { Component, ExtractPropTypes } from 'vue'

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
  icon: {
    type: definePropType<string | Component>([String, Object]),
    default: '',
  },
} as const)
export type LinkProps = ExtractPropTypes<typeof linkProps>

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type LinkEmits = typeof linkEmits
