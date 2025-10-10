import { buildProps } from '@element-plus/utils'
import { dialogEmits, dialogProps } from '@element-plus/components/dialog'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

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
export type DrawerPropsPublic = ExtractPublicPropTypes<typeof drawerProps>

export const drawerEmits = dialogEmits
