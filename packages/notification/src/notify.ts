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

// This should be a queue but considering there were `non-autoclosable` notifications.
const notifications: Record<Position, NotificationQueue> = {
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  'bottom-right': [],
}

// the gap size between each notification
const GAP_SIZE = 16
let seed = 1

const Notification: INotification = function (options = {}) {
  if (isServer) return
  const position = options.position || 'top-right'

  let verticalOffset = options.offset || 0
  notifications[position]
    .forEach(({ vm }) => {
      verticalOffset += (vm.el.offsetHeight || 0) + GAP_SIZE
    })
  verticalOffset += GAP_SIZE

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

  const vm = createVNode(
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

  // instances will remove this item when close function gets called. So we do not need to worry about it.
  render(vm, container)
  notifications[position].push({ vm })
  document.body.appendChild(container.firstElementChild)

  return {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => {
      (vm.component.proxy as ComponentPublicInstance<{ visible: boolean; }>).visible = false
    },
  }
}

  ; (['success', 'warning', 'info', 'error'] as const).forEach(type => {
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
  // maybe we can store the index when inserting the vm to notification list.
  const orientedNotifications = notifications[position]
  const idx = orientedNotifications.findIndex(({ vm }) => vm.component.props.id === id)
  if (idx === -1) return
  const { vm } = orientedNotifications[idx]
  if (!vm) return
  // calling user's on close function before notification gets removed from DOM.
  userOnClose?.(vm)

  // note that this is called @before-leave, that's why we were able to fetch this property.
  const removedHeight = vm.el.offsetHeight
  const verticalPos = position.split('-')[0]
  orientedNotifications.splice(idx, 1)
  const len = orientedNotifications.length
  if (len < 1) return
  // starting from the removing item.
  for (let i = idx; i < len; i++) {
    // new position equals the current offsetTop minus removed height plus 16px(the gap size between each item)
    const { el, component } = orientedNotifications[i].vm
    const pos = parseInt(el.style[verticalPos], 10) - removedHeight - GAP_SIZE
    component.props.offset = pos
  }
}

export function closeAll(): void {
  // loop through all directions, close them at once.
  for (const key in notifications) {
    const orientedNotifications = notifications[key as Position]
    orientedNotifications.forEach(({ vm }) => {
      // same as the previous close method, we'd like to make sure lifecycle gets handle properly.
      (vm.component.proxy as ComponentPublicInstance<{ visible: boolean; }>).visible = false
    })
  }
}

Notification.closeAll = closeAll

export default Notification
