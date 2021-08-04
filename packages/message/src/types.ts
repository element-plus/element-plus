import type { VNode } from 'vue'

export interface IMessageHandle {
  close: () => void
}

export type IMessageOptions = {
  customClass?: string
  center?: boolean
  dangerouslyUseHTMLString?: boolean // default false
  duration?: number // default 3000
  iconClass?: string
  id?: string
  message?: string | VNode
  offset?: number // defaults 20
  onClose?: () => void
  showClose?: boolean // default false
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  zIndex?: number
}

export type MessageType = 'success' | 'warning' | 'info' | 'error' | ''

export type IMessageDispatcher = (options?: IMessageOptions | string) => IMessageHandle
export type MessageParams = IMessageOptions | string
export type TypedMessageParams<T extends MessageType> = { type: T; } & Omit<IMessageOptions, 'type'> | string

export interface IMessage {
  (options?: MessageParams) : IMessageHandle
  success: (options?: TypedMessageParams<'success'>) => IMessageHandle
  warning: (options?: TypedMessageParams<'warning'>) => IMessageHandle
  info: (options?: TypedMessageParams<'info'>) => IMessageHandle
  error: (options?: TypedMessageParams<'error'>) => IMessageHandle
  closeAll(): void
}


export type MessageVM = VNode

type MessageQueueItem = {
  vm: MessageVM
}

export type MessageQueue = Array<MessageQueueItem>
