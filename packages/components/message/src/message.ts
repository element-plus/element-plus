import { createVNode, render } from 'vue'
import { isVNode } from '@element-plus/utils/util'
import PopupManager from '@element-plus/utils/popup-manager'
import isServer from '@element-plus/utils/isServer'
import MessageConstructor from './index.vue'

import type { ComponentPublicInstance } from 'vue'
import type {
  IMessage,
  MessageQueue,
  IMessageOptions,
  MessageVM,
  IMessageHandle,
  MessageParams,
} from './types'

const instances: MessageQueue = []
let seed = 1

// TODO: Since Notify.ts is basically the same like this file. So we could do some encapsulation against them to
// reduce code duplication.
const Message: IMessage = function(
  opts: MessageParams = {} as MessageParams,
): IMessageHandle {
  if (isServer) return

  if (typeof opts === 'string') {
    opts = {
      message: opts,
    }
  }

  let options: IMessageOptions = <IMessageOptions>opts

  let verticalOffset = opts.offset || 20
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el.offsetHeight || 0) + 16
  })
  verticalOffset += 16

  const id = 'message_' + seed++
  const userOnClose = options.onClose

  options = {
    ...options,
    onClose: () => {
      close(id, userOnClose)
    },
    offset: verticalOffset,
    id,
    zIndex: PopupManager.nextZIndex(),
  }

  const container = document.createElement('div')

  container.className = `container_${id}`

  const message = options.message
  const vm = createVNode(
    MessageConstructor,
    options,
    isVNode(options.message) ? { default: () => message } : null,
  )

  // clean message element preventing mem leak
  vm.props.onDestroy = () => {
    render(null, container)
    // since the element is destroy, then the VNode should be collected by GC as well
    // we do not want cause any mem leak because we have returned vm as a reference to users
    // so that we manually set it to false.
  }

  render(vm, container)
  // instances will remove this item when close function gets called. So we do not need to worry about it.
  instances.push({ vm })
  document.body.appendChild(container.firstElementChild)

  return {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => (vm.component.proxy as ComponentPublicInstance<{visible: boolean;}>).visible = false,
  }
} as any

export function close(id: string, userOnClose?: (vm: MessageVM) => void): void {
  const idx = instances.findIndex(({ vm }) => {
    const { id: _id } = vm.component.props
    return id === _id
  })
  if (idx === -1) {
    return
  }

  const { vm } = instances[idx]
  if (!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el.offsetHeight
  instances.splice(idx, 1)

  // adjust other instances vertical offset
  const len = instances.length
  if (len < 1) return
  for (let i = idx; i < len; i++) {
    const pos =
      parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 16

    instances[i].vm.component.props.offset = pos
  }
}

export function closeAll(): void {
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component as any
    instance.ctx.close()
  }
}

(['success', 'warning', 'info', 'error'] as const).forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options,
        type,
      }
    } else {
      options.type = type
    }
    return Message(options)
  }
})

Message.closeAll = closeAll
export default Message
