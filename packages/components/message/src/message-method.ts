import { createVNode, render } from 'vue'
import { isVNode } from '@element-plus/utils/util'
import PopupManager from '@element-plus/utils/popup-manager'
import isServer from '@element-plus/utils/isServer'
import MessageConstructor from './message.vue'
import { messageTypes } from './message'

import type { MessagePartial, MessageQueue, MessageProps } from './message'
import type { ComponentPublicInstance, VNode } from 'vue'

const instances: MessageQueue = []
let seed = 1

// TODO: Since Notify.ts is basically the same like this file. So we could do some encapsulation against them to reduce code duplication.

const message: MessagePartial = function (options = {}) {
  if (isServer) return { close: () => undefined }

  if (typeof options === 'string' || isVNode(options)) {
    options = { message: options }
  }

  let verticalOffset = options.offset || 20
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + 16
  })
  verticalOffset += 16

  const id = `message_${seed++}`
  const userOnClose = options.onClose
  const props: Partial<MessageProps> = {
    zIndex: PopupManager.nextZIndex(),
    offset: verticalOffset,
    ...options,
    id,
    onClose: () => {
      close(id, userOnClose)
    },
  }

  const container = document.createElement('div')

  container.className = `container_${id}`

  const message = props.message
  const vm = createVNode(
    MessageConstructor,
    props,
    isVNode(props.message) ? { default: () => message } : null
  )

  // clean message element preventing mem leak
  vm.props!.onDestroy = () => {
    render(null, container)
    // since the element is destroy, then the VNode should be collected by GC as well
    // we do not want cause any mem leak because we have returned vm as a reference to users
    // so that we manually set it to false.
  }

  render(vm, container)
  // instances will remove this item when close function gets called. So we do not need to worry about it.
  instances.push({ vm })
  document.body.appendChild(container.firstElementChild!)

  return {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () =>
      ((
        vm.component!.proxy as ComponentPublicInstance<{ visible: boolean }>
      ).visible = false),
  }
}

messageTypes.forEach((type) => {
  message[type] = (options = {}) => {
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        message: options,
      }
    }
    return message({
      ...options,
      type,
    })
  }
})

export function close(id: string, userOnClose?: (vm: VNode) => void): void {
  const idx = instances.findIndex(({ vm }) => id === vm.component!.props.id)
  if (idx === -1) return

  const { vm } = instances[idx]
  if (!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el!.offsetHeight
  instances.splice(idx, 1)

  // adjust other instances vertical offset
  const len = instances.length
  if (len < 1) return
  for (let i = idx; i < len; i++) {
    const pos =
      parseInt(instances[i].vm.el!.style['top'], 10) - removedHeight - 16

    instances[i].vm.component!.props.offset = pos
  }
}

export function closeAll(): void {
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component as any
    instance.ctx.close()
  }
}

message.closeAll = closeAll

export default message
