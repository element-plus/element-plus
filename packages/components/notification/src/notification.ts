import { buildProp, definePropType } from '@element-plus/utils/props'

import type { VNode, ExtractPropTypes } from 'vue'

export const notificationTypes = [
  'success',
  'info',
  'warning',
  'error',
] as const

export const notificationProps = {
  customClass: {
    type: String,
    default: '',
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 4500,
  },
  iconClass: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  message: buildProp({
    type: definePropType<string | VNode>([String, Object]),
    default: '',
  }),
  offset: {
    type: Number,
    default: 0,
  },
  onClick: buildProp({
    type: definePropType<() => void>(Function),
    default: () => undefined,
  }),
  onClose: buildProp({
    type: definePropType<() => void>(Function),
    required: true,
  }),
  position: buildProp({
    type: String,
    values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    default: 'top-right',
  } as const),
  showClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
  type: buildProp({
    type: String,
    values: [...notificationTypes, ''],
    default: '',
  } as const),
  zIndex: {
    type: Number,
    default: 0,
  },
} as const
export type NotificationProps = ExtractPropTypes<typeof notificationProps>

export const notificationEmits = {
  destroy: () => true,
}
export type NotificationEmits = typeof notificationEmits

export type NotificationOptions = Omit<NotificationProps, 'id'>
export type NotificationOptionsTyped = Omit<NotificationOptions, 'type'>

export interface NotificationHandle {
  close: () => void
}

export type NotificationParams = Partial<NotificationOptions> | string | VNode
export type NotificationParamsTyped =
  | Partial<NotificationOptionsTyped>
  | string
  | VNode

export interface NotifyPartial {
  (options?: NotificationParams): NotificationHandle
  closeAll: () => void

  success?: (options: NotificationParamsTyped) => NotificationHandle
  warning?: (options: NotificationParamsTyped) => NotificationHandle
  error?: (options: NotificationParamsTyped) => NotificationHandle
  info?: (options: NotificationParamsTyped) => NotificationHandle
}
export type Notify = Required<NotifyPartial>

export interface NotificationQueueItem {
  vm: VNode
}

export type NotificationQueue = NotificationQueueItem[]
