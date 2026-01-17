import { isBoolean } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { InjectionKey, TransitionProps } from 'vue'
import type { DialogContentProps } from './dialog-content'
import type Dialog from './dialog.vue'

type DoneFn = (cancel?: boolean) => void

export type DialogBeforeCloseFn = (done: DoneFn) => void

export type DialogTransition = string | TransitionProps

/**
 * @description dialog component props
 */
export interface DialogProps extends DialogContentProps {
  /**
   * @description whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true`
   */
  appendToBody?: boolean
  /**
   * @description which element the Dialog appends to
   */
  appendTo?: string | HTMLElement
  /**
   * @description callback before Dialog closes, and it will prevent Dialog from closing, use done to close the dialog
   */
  beforeClose?: DialogBeforeCloseFn
  /**
   * @description destroy elements in Dialog when closed
   */
  destroyOnClose?: boolean
  /**
   * @description whether the Dialog can be closed by clicking the mask
   */
  closeOnClickModal?: boolean
  /**
   * @description whether the Dialog can be closed by pressing ESC
   */
  closeOnPressEscape?: boolean
  /**
   * @description whether scroll of body is disabled while Dialog is displayed
   */
  lockScroll?: boolean
  /**
   * @description whether a mask is displayed
   */
  modal?: boolean
  /**
   * @description whether the mask is penetrable
   */
  modalPenetrable?: boolean
  /**
   * @description the Time(milliseconds) before open
   */
  openDelay?: number
  /**
   * @description the Time(milliseconds) before close
   */
  closeDelay?: number
  /**
   * @description value for `margin-top` of Dialog CSS, default is 15vh
   */
  top?: string
  /**
   * @description visibility of Dialog
   */
  modelValue?: boolean
  /**
   * @description custom class names for mask
   */
  modalClass?: string
  /**
   * @description width of Dialog, default is 50%
   */
  width?: string | number
  /**
   * @description same as z-index in native CSS, z-order of dialog
   */
  zIndex?: number
  /**
   * @description trap focus within dialog
   */
  trapFocus?: boolean
  /**
   * @description header's aria-level attribute
   */
  headerAriaLevel?: string
  /**
   * @description custom transition configuration for dialog animation, it can be a string (transition name) or an object with Vue transition props
   */
  transition?: DialogTransition
}

export type DialogPropsPublic = DialogProps

export const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true,
}
export type DialogEmits = typeof dialogEmits
export type DialogInstance = InstanceType<typeof Dialog> & unknown
export interface DialogConfigContext {
  alignCenter?: boolean
  draggable?: boolean
  overflow?: boolean
  transition?: DialogTransition
}

export const dialogContextKey: InjectionKey<DialogConfigContext> =
  Symbol('dialogContextKey')
