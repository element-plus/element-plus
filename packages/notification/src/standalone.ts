import { createApp, h, ref, reactive, nextTick } from 'vue'
import NotificationConstructor from './index.vue'
import type { INotificationOptions, NotificationQueue, NotificationVM } from './notification.constants'
import isServer from '../../utils/isServer'
import PopupManager from '../../utils/popup-manager'
import { isVNode } from '../../utils/util'

const NotificationRenderer = (props: Record<string, unknown>) =>
  h(NotificationConstructor, props)

let vm: NotificationVM
const notifications: NotificationQueue = []
let seed = 1

const Notification = function(options: INotificationOptions): NotificationVM {
  if (isServer) return
  const id = 'notification_' + seed++
  const userOnClose = options.onClose
  options.onClose = function() {
    close(id, userOnClose)
  }
  const elRef = ref(null)
  const defaultOptions: INotificationOptions = {
    dangerouslyUseHTMLString: false,
    duration: 4500,
    position: 'top-right',
    showClose: true,
    offset: 0,
    _idx: seed - 2,
    _obtainInstance: obtainInstance,
  }
  options = {
    ...defaultOptions,
    ...options,
    duration: 0,
    id,
  }

  options = reactive(options)

  const position = options.position || 'top-right'

  const container = document.createElement('div')
  container.className = `container_${id}`
  container.style.zIndex = String(PopupManager.nextZIndex())
  notifications.push({ $el: elRef, vm: null, container })
  vm = createApp(NotificationRenderer, { ...options, elRef }).mount(
    container,
  ) as NotificationVM

  document.body.appendChild(container)

  let verticalOffset = options.offset || 0
  nextTick(() => {
    notifications
      .filter(item => item.$el.value.style.position === position)
      .forEach(item => {
        verticalOffset += (item.$el.value?.offsetHeight || 0) + 16
      })
    verticalOffset += 16
    options.offset = verticalOffset
  })

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
  userOnClose: (vm: NotificationVM) => void,
): void {
  const idx = notifications.findIndex(i => {
    i.$el.value.id === id
  })
  if (idx === -1) {
    return
  }

  const notification = notifications[idx]
  const { vm, $el } = notification
  if (!vm) return
  userOnClose?.(vm)
  notification.container = null

  notifications.splice(idx, 1)
  const len = notifications.length
  if (len <= 1) return
  const position = $el.value.style.position
  const removedHeight = $el.value.offsetHeight
  for (let i = idx; i < len; i++) {
    if (notifications[i].$el.value.style.position === position) {
      notifications[i].$el.value.style[vm.verticalProperty] =
        parseInt(
          notifications[i].$el.value.style[vm.$data.verticalProperty],
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
