import { buildProps, iconPropType } from '@element-plus/utils'

export const dialogContentProps = buildProps({
  /**
   * @description whether to align the header and footer in center
   */
  center: Boolean,
  /**
   * @description whether to align the dialog both horizontally and vertically
   */
  alignCenter: Boolean,
  /**
   * @description custom close icon, default is Close
   */
  closeIcon: {
    type: iconPropType,
  },
  /**
   * @description enable dragging feature for Dialog
   */
  draggable: Boolean,
  /**
   * @description draggable Dialog can overflow the viewport
   */
  overflow: Boolean,
  /**
   * @description whether the Dialog takes up full screen
   */
  fullscreen: Boolean,
  /**
   * @description custom class names for header wrapper
   */
  headerClass: String,
  /**
   * @description custom class names for body wrapper
   */
  bodyClass: String,
  /**
   * @description custom class names for footer wrapper
   */
  footerClass: String,
  /**
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * @description title of Dialog. Can also be passed with a named slot (see the following table)
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description header's aria-level attribute
   */
  ariaLevel: {
    type: String,
    default: '2',
  },
} as const)

export const dialogContentEmits = {
  close: () => true,
}
