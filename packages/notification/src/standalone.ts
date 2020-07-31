import { createApp } from 'vue'
import type { App } from 'vue'
import NotificationConstructor from './index.vue'
import isServer from '../../utils/isServer'
import PopupManager from '../../utils/popup-manager'
import { isVNode } from '../../utils/util'

let instance
const instances = []
let seed = 1

const Notification = function(options) {
  if (isServer) return
  options = options || {}
  const userOnClose = options.onClose
  const id = 'notification_' + seed++
  const position = options.position || 'top-right'

  options.onClose = function() {
    Notification.close(id, userOnClose)
  }

  instance = createApp(NotificationConstructor, {
    data: options,
  })

  if (isVNode(options.message)) {
    instance.$slots.default = [options.message]
    options.message = 'REPLACED_BY_VNODE'
  }
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  instance.dom = instance.$el
  instance.dom.style.zIndex = PopupManager.nextZIndex()

  let verticalOffset = options.offset || 0
  instances
    .filter(item => item.position === position)
    .forEach(item => {
      verticalOffset += item.$el.offsetHeight + 16
    })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  return instance
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

Notification.close = function(id: string, userOnClose: (instance: App) => void) {
  let index = -1
  const len = instances.length
  const instance = instances.filter((instance, i) => {
    if (instance.id === id) {
      index = i
      return true
    }
    return false
  })[0]
  if (!instance) return
  userOnClose?.(instance)
  if (typeof userOnClose === 'function') {
    userOnClose(instance)
  }
  instances.splice(index, 1)

  if (len <= 1) return
  const position = instance.position
  const removedHeight = instance.dom.offsetHeight
  for (let i = index; i < len - 1; i++) {
    if (instances[i].position === position) {
      instances[i].dom.style[instance.verticalProperty] =
        parseInt(instances[i].dom.style[instance.verticalProperty], 10) -
        removedHeight -
        16 +
        'px'
    }
  }
}

Notification.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Notification
