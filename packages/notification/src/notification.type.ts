import type { VNode } from 'vue'


export type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
export interface INotificationHandle {
  close: () => void
}

export type INotification = (options?: INotificationOptions) => INotificationHandle

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
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  title?: string
}

export type NotificationVM = VNode

type NotificationQueueItem = {
  vm: NotificationVM
}

export type NotificationQueue = Array<NotificationQueueItem>
