import { buildProp, definePropType } from '@element-plus/utils/props'

import type { VNode, ExtractPropTypes } from 'vue'

export const messageTypes = ['success', 'info', 'warning', 'error'] as const

export const messageProps = {
  customClass: {
    type: String,
    default: '',
  },
  center: {
    type: Boolean,
    default: false,
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
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
  } as const),
  onClose: buildProp({
    type: definePropType<() => void>(Function),
    required: false,
  }),
  showClose: {
    type: Boolean,
    default: false,
  },
  type: buildProp({
    type: String,
    values: messageTypes,
    default: 'info',
  } as const),
  offset: {
    type: Number,
    default: 20,
  },
  zIndex: {
    type: Number,
    default: 0,
  },
} as const
export type MessageProps = ExtractPropTypes<typeof messageProps>

export const messageEmits = {
  destroy: () => true,
}
export type MessageEmits = typeof messageEmits

export type MessageOptions = Omit<MessageProps, 'id'>
export type MessageOptionsTyped = Omit<MessageOptions, 'type'>

export interface MessageHandle {
  close: () => void
}

export type MessageParams = Partial<MessageOptions> | string | VNode
export type MessageParamsTyped = Partial<MessageOptionsTyped> | string | VNode

export interface MessagePartial {
  (options?: MessageParams): MessageHandle
  closeAll(): void

  success?: (options?: MessageParamsTyped) => MessageHandle
  warning?: (options?: MessageParamsTyped) => MessageHandle
  info?: (options?: MessageParamsTyped) => MessageHandle
  error?: (options?: MessageParamsTyped) => MessageHandle
}
export type Message = Required<MessagePartial>

type MessageQueueItem = {
  vm: VNode
}

export type MessageQueue = MessageQueueItem[]
