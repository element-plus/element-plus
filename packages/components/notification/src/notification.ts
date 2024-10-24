import { buildProps, definePropType, iconPropType } from '@element-plus/utils'

import type { ExtractPropTypes, VNode } from 'vue'
import type Notification from './notification.vue'
import type { ButtonProps } from '@element-plus/element-plus'

export const notificationTypes = [
  'success',
  'info',
  'warning',
  'error',
] as const

export const notificationKeepOpen = [false, true, 'until-resolved'] as const

export type NotificationKeepOpen = typeof notificationKeepOpen[number]

export type NotificationAction = {
  /**
   * @description Action button inner text.
   * Must be unique and non-empty.
   */
  label: string
  /**
   * @description Listener for `click` event of action button.
   */
  execute(): void | Promise<void>
  /**
   * @description Determines whether to keep the notification open after calling `execute`.
   * Will close the notification by default.
   * If set to `'until-resolved'`, it waits for the promise from `execute` to resolve and then closes the notification.
   * @default false
   */
  keepOpen?: NotificationKeepOpen
  /**
   * @description Disables the action button after calling `execute`.
   * You probably don't want to do change this as it prevent multiple `execute` calls.
   * @default keepOpen !== true
   */
  disableAfterExecute?: boolean
  /**
   * @description Props of `el-button` component.
   * Will ignore `onclick` properties (case insensitive), use `execute` instead.
   * @default { size: 'small' }
   */
  button?: Partial<ButtonProps>
}

export const notificationProps = buildProps({
  /**
   * @description buttons for notification interaction
   */
  actions: {
    type: definePropType<NotificationAction[]>(Array),
  },
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
    type: definePropType<string | VNode>([String, Object]),
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

export type NotificationOptions = Omit<NotificationProps, 'id'> & {
  /**
   * @description set the root element for the notification, default to `document.body`
   */
  appendTo?: HTMLElement | string
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

export type NotifyFn = ((
  options?: NotificationParams
) => NotificationHandle) & { closeAll: () => void }

export type NotifyTypedFn = (
  options?: NotificationParamsTyped
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
