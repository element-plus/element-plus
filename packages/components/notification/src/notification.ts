import { buildProp } from '@element-plus/utils/props'

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
  message: buildProp<string | VNode>({
    type: [String, Object],
    default: '',
  }),
  offset: {
    type: Number,
    default: 0,
  },
  onClick: buildProp<() => void>({
    type: Function,
    default: () => undefined,
  }),
  onClose: buildProp<() => void, boolean>({
    type: Function,
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

export type NotifyFnTyped = (
  options: Partial<NotificationOptionsTyped> | string | VNode
) => NotificationHandle
export interface NotifyPartial {
  (options?: Partial<NotificationOptions>): NotificationHandle
  closeAll: () => void

  success?: NotifyFnTyped
  warning?: NotifyFnTyped
  error?: NotifyFnTyped
  info?: NotifyFnTyped
}
export type Notify = Required<NotifyPartial>

export interface NotificationQueueItem {
  vm: VNode
}

export type NotificationQueue = NotificationQueueItem[]
