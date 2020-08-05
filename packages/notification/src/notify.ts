import { reactive, createVNode, render } from 'vue'
import NotificationConstructor from './index.vue'
import type { INotificationOptions, INotification, NotificationQueue, NotificationVM } from './notification.constants'
import isServer from '../../utils/isServer'
import PopupManager from '../../utils/popup-manager'
import { isVNode } from '../../utils/util'

// const NotificationRenderer = (props: Record<string, unknown>) => {
//   if (isVNode(props.message)) {
//     return h(NotificationConstructor, props, { default: () => h(props.message) })
//   }
//   return h(NotificationConstructor, props)
// }

let vm: NotificationVM
const notifications: NotificationQueue = []
let seed = 1

const Notification: INotification = function(options: INotificationOptions): NotificationVM {
  if (isServer) return
  const id = 'notification_' + seed++
  const userOnClose = options.onClose
  options.onClose = function() {
    close(id, userOnClose)
  }

  const position = options.position || 'top-right'

  let verticalOffset = options.offset || 0
  notifications
    .filter(({ vm }) => vm.component.props.position === position)
    .forEach(({ vm }) => {
      verticalOffset += (vm.el.offsetHeight || 0) + 16
    })
  verticalOffset += 16

  const defaultOptions: INotificationOptions = {
    dangerouslyUseHTMLString: false,
    duration: 4500,
    position: 'top-right',
    showClose: true,
    offset: 0,
    _idx: notifications.length,
    // _init: function(idx: number, vm: NotificationVM): void {
    //   obtainInstance(idx, vm)

    // },
  }
  options = {
    ...defaultOptions,
    ...options,
    offset: verticalOffset,
    id,
  }

  options = reactive(options)

  const container = document.createElement('div')

  container.className = `container_${id}`
  container.style.zIndex = String(PopupManager.nextZIndex())
  // notifications.push({ vm: null, container })
  vm = createVNode(NotificationConstructor, options)
  render(vm, container)
  notifications.push({ vm, $el: container })
  document.body.appendChild(container.firstElementChild)

  return vm
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Notification[type] = options => {
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        message: options,
      }
    }
    options.type = type
    return Notification(options)
  }
})

export function close(
  id: string,
  userOnClose?: (vm: NotificationVM) => void,
): void {
  const idx = notifications.findIndex( ({ vm }) => {
    const { id: _id } = vm.component.props
    return id === _id
  })
  if (idx === -1) {
    return
  }

  const { vm, $el } = notifications[idx]
  if (!vm) return
  userOnClose?.(vm)
  const removedHeight = vm.el.offsetHeight
  // document.body.removeChild(notification.container)
  render(null, $el)

  notifications.splice(idx, 1)
  const len = notifications.length
  if (len < 1) return
  const position = vm.component.props.position
  for (let i = idx; i < len; i++) {
    if (notifications[i].vm.component.props.position === position) {
      notifications[i].vm.el.style[vm.component.ctx.verticalProperty] =
        parseInt(
          notifications[i].vm.el.style[vm.component.ctx.verticalProperty],
          10,
        ) -
        removedHeight -
        16 +
        'px'
    }
  }
}

export function closeAll(): void {
  for (let i = notifications.length - 1; i >= 0; i--) {
    notifications[i].vm.component.ctx.onClose()
  }
}

// function obtainInstance(idx: number, vm: NotificationVM): void {
//   notifications[idx] = vm
// }

export default Notification
