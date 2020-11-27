import { createVNode, nextTick, render } from 'vue'
import { isVNode } from '@element-plus/utils/util'
import PopupManager from '@element-plus/utils/popup-manager'
import isServer from '@element-plus/utils/isServer'
import MessageConstructor from './index.vue'

import type {
  IMessage,
  MessageQueue,
  IMessageOptions,
  MessageVM,
  IMessageHandle,
  MessageParams,
} from './types'

let vm: MessageVM
const instances: MessageQueue = []
let seed = 1

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
  vm = createVNode(
    MessageConstructor,
    options,
    isVNode(options.message) ? { default: () => message } : null,
  )

  render(vm, container)
  instances.push({ vm, $el: container })
  document.body.appendChild(container)

  return {
    close: options.onClose,
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

  const { vm, $el } = instances[idx]
  if (!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el.offsetHeight
  render(null, $el)
  nextTick(() => {
    document.body.removeChild($el)
  })

  instances.splice(idx, 1)

  // adjust other instances vertical offset
  const len = instances.length
  if (len < 1) return
  for (let i = idx; i < len; i++) {
    const pos =
      parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 16

    instances[i].vm.component.props.offset = pos
    instances[i].vm.component.props.vertOffset = pos
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
