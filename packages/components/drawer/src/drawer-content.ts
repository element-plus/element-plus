import { buildProps } from '@element-plus/utils'
import { dialogContentProps } from '@element-plus/components/dialog'

export const drawerContentProps = buildProps({
  ...dialogContentProps,
  direction: {
    type: String,
    default: 'rtl',
    values: ['ltr', 'rtl', 'ttb', 'btt'],
  },
  withHeader: {
    type: Boolean,
    default: true,
  },
  size: {
    type: [String, Number],
    default: '30%',
  },
} as const)

export const drawerContentEmits = {
  close: () => true,
}
