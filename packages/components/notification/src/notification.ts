import { buildProps, definePropType, iconPropType } from '@element-plus/utils'

import type { AppContext, ExtractPropTypes, VNode } from 'vue'
import type Notification from './notification.vue'

export const notificationTypes = [
  'success',
  'info',
  'warning',
  'error',
] as const

export const notificationProps = buildProps({
  /**
   * @description custom class name for Notification
   */
  customClass: {
    type: String,
    default: '',
  },
  /**
   * @description whether `message` is treated as HTML string
   */
  dangerouslyUseHTMLString: Boolean,
  /**
   * @description duration before close. It will not automatically close if set 0
   */
  duration: {
    type: Number,
    default: 4500,
  },
  /**
   * @description custom icon component. It will be overridden by `type`
   */
  icon: {
    type: iconPropType,
  },
  /**
   * @description notification dom id
   */
  id: {
    type: String,
    default: '',
  },
  /**
   * @description description text
   */
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function,
    ]),
    default: '',
  },
  /**
   * @description offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset
   */
  offset: {
    type: Number,
    default: 0,
  },
  /**
   * @description callback function when notification clicked
   */
  onClick: {
    type: definePropType<() => void>(Function),
    default: () => undefined,
  },
  /**
   * @description callback function when closed
   */
  onClose: {
    type: definePropType<() => void>(Function),
    required: true,
  },
  /**
   * @description custom position
   */
  position: {
    type: String,
    values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    default: 'top-right',
  },
  /**
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * @description title
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description notification type
   */
  type: {
    type: String,
    values: [...notificationTypes, ''],
    default: '',
  },
  /**
   * @description initial zIndex
   */
  zIndex: Number,
} as const)
export type NotificationProps = ExtractPropTypes<typeof notificationProps>

export const notificationEmits = {
  destroy: () => true,
}
export type NotificationEmits = typeof notificationEmits

export type NotificationInstance = InstanceType<typeof Notification>

export type NotificationOptions = Omit<NotificationProps, 'id' | 'onClose'> & {
  /**
   * @description set the root element for the notification, default to `document.body`
   */
  appendTo?: HTMLElement | string
  /**
   * @description callback function when closed
   */
  onClose?(vm: VNode): void
}
export type NotificationOptionsTyped = Omit<NotificationOptions, 'type'>

export interface NotificationHandle {
  close: () => void
}

export type NotificationParams = Partial<NotificationOptions> | string | VNode
export type NotificationParamsTyped =
  | Partial<NotificationOptionsTyped>
  | string
  | VNode

export interface NotifyFn {
  (
    options?: NotificationParams,
    appContext?: null | AppContext
  ): NotificationHandle
  closeAll(): void
  _context: AppContext | null
}

export type NotifyTypedFn = (
  options?: NotificationParamsTyped,
  appContext?: null | AppContext
) => NotificationHandle

export interface Notify extends NotifyFn {
  success: NotifyTypedFn
  warning: NotifyTypedFn
  error: NotifyTypedFn
  info: NotifyTypedFn
}

export interface NotificationQueueItem {
  vm: VNode
}

export type NotificationQueue = NotificationQueueItem[]
