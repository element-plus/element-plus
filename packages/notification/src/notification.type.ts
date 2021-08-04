import type { VNode } from 'vue'


export type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
export type NotificationType = 'success' | 'warning' | 'info' | 'error' | ''
export type TypedNotificationOptions = Omit<INotificationOptions, 'type'> | string

export interface INotificationHandle {
  close: () => void
}

export interface INotification {
  (options?: INotificationOptions) : INotificationHandle
  success?: (options: TypedNotificationOptions) => INotificationHandle
  warning?: (options: TypedNotificationOptions) => INotificationHandle
  error?: (options: TypedNotificationOptions) => INotificationHandle
  info?: (options: TypedNotificationOptions) => INotificationHandle
  closeAll: () => void
}

export type INotificationOptions = {
  customClass?: string
  dangerouslyUseHTMLString?: boolean // default false
  duration?: number // default 4500
  iconClass?: string
  id?: string
  message?: string | VNode
  zIndex?: number
  onClose?: () => void
  onClick?: () => void
  offset?: number // defaults 0
  position?: Position // default top-right
  showClose?: boolean
  type?: NotificationType
  title?: string
}

export type NotificationVM = VNode

type NotificationQueueItem = {
  vm: NotificationVM
}

export type NotificationQueue = Array<NotificationQueueItem>
