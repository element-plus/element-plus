import { buildProps, iconPropType } from '@element-plus/utils'

import type { Component } from 'vue'

/**
 * @description dialog-content component props
 */
export interface DialogContentProps {
  /**
   * @description whether to align the header and footer in center
   */
  center?: boolean
  /**
   * @description whether to align the dialog both horizontally and vertically
   */
  alignCenter?: boolean
  /**
   * @description custom close icon, default is Close
   */
  closeIcon?: string | Component
  /**
   * @description enable dragging feature for Dialog
   */
  draggable?: boolean
  /**
   * @description draggable Dialog can overflow the viewport
   */
  overflow?: boolean
  /**
   * @description whether the Dialog takes up full screen
   */
  fullscreen?: boolean
  /**
   * @description custom class names for header wrapper
   */
  headerClass?: string
  /**
   * @description custom class names for body wrapper
   */
  bodyClass?: string
  /**
   * @description custom class names for footer wrapper
   */
  footerClass?: string
  /**
   * @description whether to show a close button
   */
  showClose?: boolean
  /**
   * @description title of Dialog. Can also be passed with a named slot (see the following table)
   */
  title?: string
  /**
   * @description header's aria-level attribute
   */
  ariaLevel?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `DialogContentProps` instead.
 */
export const dialogContentProps = buildProps({
  /**
   * @description whether to align the header and footer in center
   */
  center: Boolean,
  /**
   * @description whether to align the dialog both horizontally and vertically
   */
  alignCenter: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description custom close icon, default is Close
   */
  closeIcon: {
    type: iconPropType,
  },
  /**
   * @description enable dragging feature for Dialog
   */
  draggable: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description draggable Dialog can overflow the viewport
   */
  overflow: {
    type: Boolean,
    default: undefined,
  },
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
