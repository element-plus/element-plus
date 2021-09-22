import type { CSSProperties, VNode } from 'vue'

type MessageType = '' | 'success' | 'warning' | 'info' | 'error'

export type Action = 'confirm' | 'close' | 'cancel'
export type MessageBoxType = '' | 'prompt' | 'alert' | 'confirm'
export type MessageBoxData = MessageBoxInputData & Action
export interface MessageBoxInputData {
  value: string
  action: Action
}

export interface MessageBoxInputValidator {
  (value: string): boolean | string
}

export declare interface MessageBoxState {
  title: string
  message: string
  type: MessageType
  iconClass: string
  customClass: string
  customStyle: CSSProperties
  showInput: boolean
  inputValue: string
  inputPlaceholder: string
  inputType: string
  inputPattern: RegExp
  inputValidator: MessageBoxInputValidator
  inputErrorMessage: string
  showConfirmButton: boolean
  showCancelButton: boolean
  action: Action
  dangerouslyUseHTMLString: boolean
  confirmButtonText: string
  cancelButtonText: string
  confirmButtonLoading: boolean
  cancelButtonLoading: boolean
  confirmButtonClass: string
  confirmButtonDisabled: boolean
  cancelButtonClass: string
  editorErrorMessage: string

  beforeClose:
    | null
    | ((action: Action, instance: MessageBoxState, done: () => void) => void)
  callback: null | Callback
  distinguishCancelAndClose: boolean
  modalFade: boolean
  modalClass: string
  // refer to: https://github.com/ElemeFE/element/commit/2999279ae34ef10c373ca795c87b020ed6753eed
  // seemed ok for now without this state.
  // isOnComposition: false, // temporary remove
  validateError: boolean
  zIndex: number
}

export type Callback =
  | ((value: string, action: Action) => any)
  | ((action: Action) => any)

/** Options used in MessageBox */
export interface ElMessageBoxOptions {
  /** Callback before MessageBox closes, and it will prevent MessageBox from closing */
  beforeClose?: (
    action: Action,
    instance: MessageBoxState,
    done: () => void
  ) => void

  /** Custom class name for MessageBox */
  customClass?: string

  /** Custom inline style for MessageBox */
  customStyle?: CSSProperties

  /** MessageBox closing callback if you don't prefer Promise */
  callback?: Callback

  /** Text content of cancel button */
  cancelButtonText?: string

  /** Text content of confirm button */
  confirmButtonText?: string

  /** Custom class name of cancel button */
  cancelButtonClass?: string

  /** Custom class name of confirm button */
  confirmButtonClass?: string

  /** Whether to align the content in center */
  center?: boolean

  /** Content of the MessageBox */
  message?: string | VNode

  /** Title of the MessageBox */
  title?: string

  /** Message type, used for icon display */
  type?: MessageType

  /** Message box type */
  boxType?: MessageBoxType

  /** Custom icon's class */
  iconClass?: string

  /** Whether message is treated as HTML string */
  dangerouslyUseHTMLString?: boolean

  /** Whether to distinguish canceling and closing */
  distinguishCancelAndClose?: boolean

  /** Whether to lock body scroll when MessageBox prompts */
  lockScroll?: boolean

  /** Whether to show a cancel button */
  showCancelButton?: boolean

  /** Whether to show a confirm button */
  showConfirmButton?: boolean

  /** Whether to show a close button */
  showClose?: boolean

  /** Whether to use round button */
  roundButton?: boolean

  /** Whether MessageBox can be closed by clicking the mask */
  closeOnClickModal?: boolean

  /** Whether MessageBox can be closed by pressing the ESC */
  closeOnPressEscape?: boolean

  /** Whether to close MessageBox when hash changes */
  closeOnHashChange?: boolean

  /** Whether to show an input */
  showInput?: boolean

  /** Placeholder of input */
  inputPlaceholder?: string

  /** Initial value of input */
  inputValue?: string

  /** Regexp for the input */
  inputPattern?: RegExp

  /** Input Type: text, textArea, password or number */
  inputType?: string

  /** Validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage */
  inputValidator?: MessageBoxInputValidator

  /** Error message when validation fails */
  inputErrorMessage?: string
}

export type ElMessageBoxShortcutMethod = ((
  message: ElMessageBoxOptions['message'],
  title: ElMessageBoxOptions['title'],
  options?: ElMessageBoxOptions
) => Promise<MessageBoxData>) &
  ((
    message: ElMessageBoxOptions['message'],
    options?: ElMessageBoxOptions
  ) => Promise<MessageBoxData>)

export interface IElMessageBox {
  /** Show a message box */
  // (message: string, title?: string, type?: string): Promise<MessageBoxData>

  /** Show a message box */
  (options: ElMessageBoxOptions): Promise<MessageBoxData>

  /** Show an alert message box */
  alert: ElMessageBoxShortcutMethod

  /** Show a confirm message box */
  confirm: ElMessageBoxShortcutMethod

  /** Show a prompt message box */
  prompt: ElMessageBoxShortcutMethod

  /** Close current message box */
  close(): void
}
