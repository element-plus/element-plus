import { createVNode, render } from 'vue'
import NotificationConstructor from './index.vue'
import isServer from '@element-plus/utils/isServer'
import PopupManager from '@element-plus/utils/popup-manager'
import { isVNode } from '@element-plus/utils/util'

import type { ComponentPublicInstance } from 'vue'
import type {
  INotificationOptions,
  INotification,
  NotificationQueue,
  NotificationVM,
  Position,
} from './notification.type'

let vm: NotificationVM
const notifications: Record<Position, NotificationQueue> = {
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  'bottom-right': [],
}

let seed = 1

const Notification: INotification = function(options = {
}) {
  if (isServer) return
  const position = options.position || 'top-right'

  let verticalOffset = options.offset || 0
  notifications[position]
    .forEach(({ vm }) => {
      verticalOffset += (vm.el.offsetHeight || 0) + 16
    })
  verticalOffset += 16

  const id = 'notification_' + seed++
  const userOnClose = options.onClose
  options = {
    // default options end
    ...options,
    onClose: () => {
      close(id, position, userOnClose)
    },
    offset: verticalOffset,
    id,
    zIndex: PopupManager.nextZIndex(),
  }

  const container = document.createElement('div')

  vm = createVNode(
    NotificationConstructor,
    options,
    isVNode(options.message)
      ? {
        default: () => options.message,
      }
      : null,
  )

  // clean notification element preventing mem leak
  vm.props.onDestroy = () => {
    render(null, container)
  }

  render(vm, container)
  notifications[position].push({ vm })
  document.body.appendChild(container.firstElementChild)

  return {
    close: options.onClose,
  }
}

;(['success', 'warning', 'info', 'error'] as const).forEach(type => {
  Object.assign(Notification, {
    [type]: (options: NotificationVM | INotificationOptions | string = {}) => {
      if (typeof options === 'string' || isVNode(options)) {
        options = {
          message: options,
        }
      }
      options.type = type
      return Notification(options)
    },
  })
})

/**
 * This function gets called when user click `x` button or press `esc` or the time reached its limitation.
 * Emitted by transition@before-leave event so that we can fetch the current notification.offsetHeight, if this was called
 * by @after-leave the DOM element will be removed from the page thus we can no longer fetch the offsetHeight.
 * @param {String} id notification id to be closed
 * @param {Position} position the positioning strategy
 * @param {Function} userOnClose the callback called when close passed by user
 */
export function close(
  id: string,
  position: Position,
  userOnClose?: (vm: NotificationVM) => void,
): void {
  const orientedNotifications = notifications[position]
  const idx = orientedNotifications.findIndex(({ vm }) => {
    const { id: _id } = vm.component.props
    return id === _id
  })
  if (idx === -1) {
    return
  }

  const { vm } = orientedNotifications[idx]
  if (!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el.offsetHeight

  orientedNotifications.splice(idx, 1)
  const len = orientedNotifications.length

  if (len < 1) return
  // const position = vm.props.position
  for (let i = idx; i < len; i++) {
    const verticalPos = position.split('-')[0]
    const pos =
      parseInt(orientedNotifications[i].vm.el.style[verticalPos], 10) -
      removedHeight -
      16

    orientedNotifications[i].vm.component.props.offset = pos
  }
}

export function closeAll(): void {
  for (const key in notifications) {
    notifications[key as Position].forEach(({ vm }) => {
      (vm.component.proxy as ComponentPublicInstance<{ onClose: (() => void); }>).onClose()
    })
  }
}

export default Notification
