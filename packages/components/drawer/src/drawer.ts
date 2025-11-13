import { buildProps } from '@element-plus/utils'
import { dialogEmits, dialogProps } from '@element-plus/components/dialog'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: 'rtl',
    values: ['ltr', 'rtl', 'ttb', 'btt'],
  },
  resizable: Boolean,
  size: {
    type: [String, Number],
    default: '30%',
  },
  withHeader: {
    type: Boolean,
    default: true,
  },
  modalFade: {
    type: Boolean,
    default: true,
  },
  headerAriaLevel: {
    type: String,
    default: '2',
  },
} as const)

export type DrawerProps = ExtractPropTypes<typeof drawerProps>
export type DrawerPropsPublic = __ExtractPublicPropTypes<typeof drawerProps>

export const drawerEmits = {
  ...dialogEmits,
  'resize-start': (event: MouseEvent, size: number) =>
    event instanceof MouseEvent && typeof size === 'number',
  resize: (event: MouseEvent, size: number) =>
    event instanceof MouseEvent && typeof size === 'number',
  'resize-end': (event: MouseEvent, size: number) =>
    event instanceof MouseEvent && typeof size === 'number',
}

export type DrawerEmits = typeof drawerEmits
