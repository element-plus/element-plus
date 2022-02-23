import { buildProps } from '@element-plus/utils'
import { dialogProps, dialogEmits } from '@element-plus/components/dialog'
import { drawerContentProps } from './drawer-content'
import type { ExtractPropTypes } from 'vue'

export const drawerProps = buildProps({
  ...dialogProps,
  ...drawerContentProps,
  modalFade: {
    type: Boolean,
    default: true,
  },
} as const)

export type DrawerProps = ExtractPropTypes<typeof drawerProps>

export const drawerEmits = dialogEmits
