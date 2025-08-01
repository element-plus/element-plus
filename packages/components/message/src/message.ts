import {
  buildProps,
  definePropType,
  iconPropType,
  isClient,
  mutable,
} from '@element-plus/utils'

import type {
  AppContext,
  ExtractPropTypes,
  VNode,
  __ExtractPublicPropTypes,
} from 'vue'
import type { Mutable } from '@element-plus/utils'
import type MessageConstructor from './message.vue'

export const messageTypes = [
  'primary',
  'success',
  'info',
  'warning',
  'error',
] as const

export type MessageType = typeof messageTypes[number]
/** @deprecated please use `MessageType` instead */
export type messageType = MessageType // will be removed in 3.0.0.

export interface MessageConfigContext {
  max?: number
  grouping?: boolean
  duration?: number
  offset?: number
  showClose?: boolean
  plain?: boolean
}

export const messageDefaults = mutable({
  customClass: '',
  dangerouslyUseHTMLString: false,
  duration: 3000,
  icon: undefined,
  id: '',
  message: '',
  onClose: undefined,
  showClose: false,
  type: 'info',
  plain: false,
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: isClient ? document.body : (undefined as never),
} as const)

export const messageProps = buildProps({
  /**
   * @description custom class name for Message
   */
  customClass: {
    type: String,
    default: messageDefaults.customClass,
  },
  /**
   * @description whether `message` is treated as HTML string
   */
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString,
  },
  /**
   * @description display duration, millisecond. If set to 0, it will not turn off automatically
   */
  duration: {
    type: Number,
    default: messageDefaults.duration,
  },
  /**
   * @description custom icon component, overrides `type`
   */
  icon: {
    type: iconPropType,
    default: messageDefaults.icon,
  },
  /**
   * @description message dom id
   */
  id: {
    type: String,
    default: messageDefaults.id,
  },
  /**
   * @description message text
   */
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function,
    ]),
    default: messageDefaults.message,
  },
  /**
   * @description callback function when closed with the message instance as the parameter
   */
  onClose: {
    type: definePropType<() => void>(Function),
    default: messageDefaults.onClose,
  },
  /**
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose,
  },
  /**
   * @description message type
   */
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type,
  },
  /**
   * @description whether message is plain
   */
  plain: {
    type: Boolean,
    default: messageDefaults.plain,
  },
  /**
   * @description set the distance to the top of viewport
   */
  offset: {
    type: Number,
    default: messageDefaults.offset,
  },
  /**
   * @description input box size
   */
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex,
  },
  /**
   * @description merge messages with the same content, type of VNode message is not supported
   */
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping,
  },
  /**
   * @description The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
   */
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum,
  },
} as const)
export type MessageProps = ExtractPropTypes<typeof messageProps>
export type MessagePropsPublic = __ExtractPublicPropTypes<typeof messageProps>

export const messageEmits = {
  destroy: () => true,
}
export type MessageEmits = typeof messageEmits

export type MessageInstance = InstanceType<typeof MessageConstructor> & unknown

export type MessageOptions = Partial<
  Mutable<
    Omit<MessageProps, 'id'> & {
      appendTo?: HTMLElement | string
    }
  >
>
export type MessageParams = MessageOptions | MessageOptions['message']
export type MessageParamsNormalized = Omit<MessageProps, 'id'> & {
  /**
   * @description set the root element for the message, default to `document.body`
   */
  appendTo: HTMLElement
}
export type MessageOptionsWithType = Omit<MessageOptions, 'type'>
export type MessageParamsWithType =
  | MessageOptionsWithType
  | MessageOptions['message']

export interface MessageHandler {
  /**
   * @description close the Message
   */
  close: () => void
}

export type MessageFn = {
  (options?: MessageParams, appContext?: null | AppContext): MessageHandler
  closeAll(type?: MessageType): void
}
export type MessageTypedFn = (
  options?: MessageParamsWithType,
  appContext?: null | AppContext
) => MessageHandler

export type Message = MessageFn & {
  primary: MessageTypedFn
  success: MessageTypedFn
  warning: MessageTypedFn
  info: MessageTypedFn
  error: MessageTypedFn
}
