import type { ComponentPublicInstance, VNode } from 'vue'

export interface INotification<P = (options: INotificationOptions) => void> {
  (options: INotificationOptions): void
  success?: P
  warning?: P
  info?: P
  error?: P
}
export type INotificationOptions = {
  customClass?: string
  dangerouslyUseHTMLString?: boolean // default false
  duration?: number // default 4500
  iconClass?: string
  id?: string
  message?: string | VNode
  onClose?: () => unknown
  onClick?: () => unknown
  offset?: number // defaults 0
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' // default top-right
  showClose?: boolean
  title?: string
  type?: 'success' | 'warning' | 'info' | 'error'
  _idx?: number
  _init?: (idx: number, vm: NotificationVM) => void
}

export type NotificationVM = ComponentPublicInstance<INotificationOptions, unknown, { verticalProperty: string; }>

export type NotificationQueue = Array<{
  vm: Nullable<NotificationVM>
  container: HTMLElement
}>


export const defaultProps = {
  visible: false,
  title: '',
  message: '',
  duration: 4500,
  type: '',
  showClose: true,
  customClass: '',
  iconClass: '',
  onClose: null,
  onClick: null,
  closed: false,
  verticalOffset: 0,
  timer: null,
  dangerouslyUseHTMLString: false,
  position: 'top-right',
}

