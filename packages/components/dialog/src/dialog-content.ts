import { buildProps, iconPropType } from '@element-plus/utils'

export const dialogContentProps = buildProps({
  center: {
    type: Boolean,
    default: false,
  },
  alignCenter: {
    type: Boolean,
    default: false,
  },
  closeIcon: {
    type: iconPropType,
  },
  /**
   * @deprecated will be removed in version 2.4.0, please use class
   */
  customClass: {
    type: String,
    default: '',
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
} as const)

export const dialogContentEmits = {
  close: () => true,
}
