import { buildProps, definePropType } from '@element-plus/utils/props'
import { dialogProps } from '@element-plus/components/dialog'
import type { ExtractPropTypes } from 'vue'

type DrawerDirection = 'ltr' | 'rtl' | 'ttb' | 'btt'

export const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: definePropType<DrawerDirection>(String),
    default: 'rtl',
    values: ['ltr', 'rtl', 'ttb', 'btt'],
  },
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
} as const)

export type DrawerProps = ExtractPropTypes<typeof drawerProps>
