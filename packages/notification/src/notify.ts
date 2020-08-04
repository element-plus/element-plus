import { createApp, h, reactive } from 'vue'
import NotificationConstructor from './index.vue'
import type { INotificationOptions, INotification, NotificationQueue, NotificationVM } from './notification.constants'
import isServer from '../../utils/isServer'
import PopupManager from '../../utils/popup-manager'
import { isVNode } from '../../utils/util'

const NotificationRenderer = (props: Record<string, unknown>) => {
  if (isVNode(props.message)) {
    return h(NotificationConstructor, props, { default: () => h(props.message) })
  }
  return h(NotificationConstructor, props)
}

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
  const defaultOptions: INotificationOptions = {
    dangerouslyUseHTMLString: false,
    duration: 4500,
    position: 'top-right',
    showClose: true,
    offset: 0,
    _idx: notifications.length,
    _init: function(idx: number, vm: NotificationVM): void {
      obtainInstance(idx, vm)
      let verticalOffset = options.offset || 0
      notifications
        .filter(item => item.vm.$props.position === position)
        .forEach(({ vm }) => {
          verticalOffset += (vm.$el.offsetHeight || 0) + 16
        })
      verticalOffset += 16
      this.offset = verticalOffset
    },
  }
  options = {
    ...defaultOptions,
    ...options,
    id,
  }

  options = reactive(options)

  const position = options.position || 'top-right'

  const container = document.createElement('div')
  container.className = `container_${id}`
  container.style.zIndex = String(PopupManager.nextZIndex())
  notifications.push({ vm: null, container })
  vm = createApp(NotificationRenderer, { ...options }).mount(
    container,
  ) as NotificationVM

  document.body.appendChild(container)

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
  const idx = notifications.findIndex(i => {
    const { id: _id } = i.vm.$props
    return id === _id
  })
  if (idx === -1) {
    return
  }

  const notification = notifications[idx]
  const { vm } = notification
  if (!vm) return
  userOnClose?.(vm)
  const removedHeight = vm.$el.offsetHeight
  document.body.removeChild(notification.container)
  notification.container = null

  notifications.splice(idx, 1)
  const len = notifications.length
  if (len < 1) return
  const position = vm.$props.position
  for (let i = idx; i < len; i++) {
    if (notifications[i].vm.$props.position === position) {
      notifications[i].vm.$el.style[vm.verticalProperty] =
        parseInt(
          notifications[i].vm.$el.style[vm.verticalProperty],
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
    notifications[i].vm.onClose()
  }
}

function obtainInstance(idx: number, vm: NotificationVM): void {
  notifications[idx].vm = vm
}

export default Notification
