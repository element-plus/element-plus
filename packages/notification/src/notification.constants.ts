import type { VNode } from 'vue'

export type INotification = (options?: INotificationOptions) => NotificationVM

export type INotificationOptions = {
  customClass?: string
  dangerouslyUseHTMLString?: boolean // default false
  duration?: number // default 4500
  iconClass?: string
  id?: string
  message?: string | VNode
  zIndex?: number
  onClose?: () => unknown
  onClick?: () => unknown
  offset?: number // defaults 0
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' // default top-right
  showClose?: boolean
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  title?: string
}

export type NotificationVM = VNode

type NotificationQueueItem = {
  vm: NotificationVM
  $el: HTMLElement
}

export type NotificationQueue = Array<NotificationQueueItem>
