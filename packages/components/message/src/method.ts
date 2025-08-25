import { createVNode, isVNode, render } from 'vue'
import {
  debugWarn,
  hasOwn,
  isBoolean,
  isClient,
  isElement,
  isFunction,
  isNumber,
  isString,
} from '@element-plus/utils'
import { messageConfig } from '@element-plus/components/config-provider'
import MessageConstructor from './message.vue'
import {
  MESSAGE_DEFAULT_PLACEMENT,
  messageDefaults,
  messagePlacement,
  messageTypes,
} from './message'
import { getOrCreatePlacementInstances, placementInstances } from './instance'

import type { MessageContext } from './instance'
import type { AppContext } from 'vue'
import type {
  Message,
  MessageFn,
  MessageHandler,
  MessageOptions,
  MessageParams,
  MessageParamsNormalized,
  MessagePlacement,
  MessageType,
} from './message'

let seed = 1

// TODO: Since Notify.ts is basically the same like this file. So we could do some encapsulation against them to reduce code duplication.

const normalizeAppendTo = (normalized: MessageOptions) => {
  const appendTo = normalized.appendTo
  if (!appendTo) {
    normalized.appendTo = document.body
  } else if (isString(normalized.appendTo)) {
    let appendTo = document.querySelector<HTMLElement>(normalized.appendTo)

    // should fallback to default value with a warning
    if (!isElement(appendTo)) {
      debugWarn(
        'ElMessage',
        'the appendTo option is not an HTMLElement. Falling back to document.body.'
      )
      appendTo = document.body
    }
    normalized.appendTo = appendTo
  }
}

const normalizePlacement = (normalized: MessageOptions) => {
  // if placement is not passed and global has config, use global config
  if (
    !normalized.placement &&
    isString(messageConfig.placement) &&
    messageConfig.placement
  ) {
    normalized.placement = messageConfig.placement as
      | MessagePlacement
      | undefined
  }
  // if placement is not passed and global has no config, use default config
  if (!normalized.placement) {
    normalized.placement = MESSAGE_DEFAULT_PLACEMENT
  }
  // if placement is not valid, use default config
  if (!messagePlacement.includes(normalized.placement!)) {
    debugWarn(
      'ElMessage',
      `Invalid placement: ${normalized.placement}. Falling back to '${MESSAGE_DEFAULT_PLACEMENT}'.`
    )
    normalized.placement = MESSAGE_DEFAULT_PLACEMENT
  }
}

const normalizeOptions = (params?: MessageParams) => {
  const options: MessageOptions =
    !params || isString(params) || isVNode(params) || isFunction(params)
      ? { message: params }
      : params

  const normalized: MessageOptions = {
    ...messageDefaults,
    ...options,
  }

  normalizeAppendTo(normalized)
  normalizePlacement(normalized)

  // When grouping is configured globally,
  // if grouping is manually set when calling message individually and it is not equal to the default value,
  // the global configuration cannot override the current setting. default => false
  if (isBoolean(messageConfig.grouping) && !normalized.grouping) {
    normalized.grouping = messageConfig.grouping
  }
  if (isNumber(messageConfig.duration) && normalized.duration === 3000) {
    normalized.duration = messageConfig.duration
  }
  if (isNumber(messageConfig.offset) && normalized.offset === 16) {
    normalized.offset = messageConfig.offset
  }
  if (isBoolean(messageConfig.showClose) && !normalized.showClose) {
    normalized.showClose = messageConfig.showClose
  }
  if (isBoolean(messageConfig.plain) && !normalized.plain) {
    normalized.plain = messageConfig.plain
  }

  return normalized as MessageParamsNormalized
}

const closeMessage = (instance: MessageContext) => {
  const placement = instance.props.placement || MESSAGE_DEFAULT_PLACEMENT
  const instances = placementInstances[placement]

  const idx = instances.indexOf(instance)
  if (idx === -1) return
  instances.splice(idx, 1)
  const { handler } = instance
  handler.close()
}

const createMessage = (
  { appendTo, ...options }: MessageParamsNormalized,
  context?: AppContext | null
): MessageContext => {
  const id = `message_${seed++}`
  const userOnClose = options.onClose

  const container = document.createElement('div')

  const props = {
    ...options,
    // now the zIndex will be used inside the message.vue component instead of here.
    // zIndex: nextIndex() + options.zIndex
    id,
    onClose: () => {
      userOnClose?.()
      closeMessage(instance)
    },

    // clean message element preventing mem leak
    onDestroy: () => {
      // since the element is destroy, then the VNode should be collected by GC as well
      // we do not want cause any mem leak because we have returned vm as a reference to users
      // so that we manually set it to false.
      render(null, container)
    },
  }
  const vnode = createVNode(
    MessageConstructor,
    props,
    isFunction(props.message) || isVNode(props.message)
      ? {
          default: isFunction(props.message)
            ? props.message
            : () => props.message,
        }
      : null
  )
  vnode.appContext = context || message._context

  render(vnode, container)
  // instances will remove this item when close function gets called. So we do not need to worry about it.
  appendTo.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const handler: MessageHandler = {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => {
      vm.exposed!.close()
    },
  }

  const instance: MessageContext = {
    id,
    vnode,
    vm,
    handler,
    props: (vnode.component as any).props,
  }

  return instance
}

const message: MessageFn &
  Partial<Message> & { _context: AppContext | null } = (
  options = {},
  context
) => {
  if (!isClient) return { close: () => undefined }

  const normalized = normalizeOptions(options)
  const instances = getOrCreatePlacementInstances(
    normalized.placement || MESSAGE_DEFAULT_PLACEMENT
  )

  if (normalized.grouping && instances.length) {
    const instance = instances.find(
      ({ vnode: vm }) => vm.props?.message === normalized.message
    )
    if (instance) {
      instance.props.repeatNum += 1
      instance.props.type = normalized.type
      return instance.handler
    }
  }

  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => undefined }
  }

  const instance = createMessage(normalized, context)

  instances.push(instance)
  return instance.handler
}

messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options)
    return message({ ...normalized, type }, appContext)
  }
})

export function closeAll(type?: MessageType): void {
  for (const placement in placementInstances) {
    if (hasOwn(placementInstances, placement)) {
      // Create a copy of instances to avoid modification during iteration
      const instances: MessageContext[] = [...placementInstances[placement]]
      for (const instance of instances) {
        if (!type || type === instance.props.type) {
          instance.handler.close()
        }
      }
    }
  }
}

export function closeAllByPlacement(placement: MessagePlacement) {
  if (!placementInstances[placement]) return
  // Create a copy of instances to avoid modification during iteration
  const instances = [...placementInstances[placement]]
  instances.forEach((instance) => instance.handler.close())
}

message.closeAll = closeAll
message.closeAllByPlacement = closeAllByPlacement
message._context = null

export default message as Message
