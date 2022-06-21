import { createVNode, render } from 'vue'
import { isClient } from '@vueuse/core'
import {
  debugWarn,
  isElement,
  isFunction,
  isNumber,
  isString,
  isVNode,
} from '@element-plus/utils'
import { useZIndex } from '@element-plus/hooks'
import { messageConfig } from '@element-plus/components/config-provider/src/config-provider'
import MessageConstructor from './message.vue'
import { messageDefaults, messageTypes } from './message'

import type { AppContext } from 'vue'
import type {
  Message,
  MessageFn,
  MessageHandler,
  MessageInstance,
  MessageOptions,
  MessageParams,
  MessageParamsNormalized,
  MessageQueue,
  MessageQueueItem,
} from './message'

const instances: MessageQueue = []
let seed = 1

// TODO: Since Notify.ts is basically the same like this file. So we could do some encapsulation against them to reduce code duplication.

const normalizeOptions = (params?: MessageParams) => {
  const options: MessageOptions =
    !params || isString(params) || isVNode(params) || isFunction(params)
      ? { message: params }
      : params

  const normalized = {
    ...messageDefaults,
    ...options,
  }

  if (isString(normalized.appendTo)) {
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

  return normalized as MessageParamsNormalized
}

const MESSAGE_HEIGHT = 48
const MESSAGE_GAP = 16

const getNextOffset = (offset: number) => offset + MESSAGE_HEIGHT + MESSAGE_GAP

const computeOffset = () => {
  if (instances.length === 0) return

  instances.reduce((prev, next) => {
    next.props.offset = prev
    return getNextOffset(prev)
  }, instances[0].options.offset)
}

const closeMessage = (instance: MessageQueueItem) => {
  const idx = instances.indexOf(instance)
  if (idx === -1) return

  instances.splice(idx, 1)
  const { handler } = instance
  handler.close()

  computeOffset()
}

const createMessage = (
  { appendTo, ...options }: MessageParamsNormalized,
  context?: AppContext | null
): MessageQueueItem => {
  const { nextZIndex } = useZIndex()

  const id = `message_${seed++}`
  const userOnClose = options.onClose

  let offset: number
  const lastInstance = instances[instances.length - 1]
  if (lastInstance) {
    offset = getNextOffset(lastInstance.vm.offset)
  } else {
    offset = options.offset
  }

  const container = document.createElement('div')

  const props = {
    ...options,
    zIndex: options.zIndex ?? nextZIndex(),
    offset,
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
      ? { default: props.message }
      : null
  )
  vnode.appContext = context || message._context

  render(vnode, container)
  // instances will remove this item when close function gets called. So we do not need to worry about it.
  appendTo.appendChild(container.firstElementChild!)

  const vm = vnode.component!.proxy as MessageInstance
  const handler: MessageHandler = {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore `visible` from defineExpose
      vm.visible = false
    },
  }

  const instance = {
    id,
    vnode,
    vm,
    handler,
    options: { appendTo, ...options },
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

  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => undefined }
  }

  const normalized = normalizeOptions(options)

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

export function closeAll(): void {
  for (const instance of instances) {
    instance.handler.close()
  }
}

message.closeAll = closeAll
message._context = null

export default message as Message
