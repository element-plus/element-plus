import { createApp, h, ref, reactive } from 'vue'
import type { VNode, ComponentPublicInstance, Ref, SetupContext } from 'vue'
import NotificationConstructor from './index.vue'
import isServer from '../../utils/isServer'
import PopupManager from '../../utils/popup-manager'
import { isVNode } from '../../utils/util'

type INotificationOptions = {
  customClass?: string;
  dangerouslyUseHTMLString?: boolean; // default false
  duration?: number; // default 4500
  iconClass?: string;
  id?: string;
  message?: string | VNode;
  onClose?: () => unknown;
  onClick?: () => unknown;
  offset?: number; // defaults 0
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' // default top-right
  showClose?: boolean;
  title?: string;
  type?: 'success' | 'warning' | 'info' | 'error';
}

const defaultOptions: INotificationOptions = {
  dangerouslyUseHTMLString: false,
  duration: 4500,
  position: 'top-right',
  showClose: true,
  offset: 0,
}

const NotificationRenderer =
  (props: Record<string, unknown>) => h(NotificationConstructor, props)

let instance: ComponentPublicInstance
const instances: {
  $el: Ref<HTMLElement>,
  instance: ComponentPublicInstance<INotificationOptions, unknown, { verticalProperty: string }>,
}[] = []
let seed = 1

const Notification = function(options: INotificationOptions): ComponentPublicInstance {
  if (isServer) return
  const id = 'notification_' + seed++
  const userOnClose = options.onClose
  options.onClose = function() {
    close(id, userOnClose)
  }
  const elRef = ref(null)
  options = {
    ...defaultOptions,
    ...options,
    id,
  }
  console.log(options)
  options = reactive(options)

  const position = options.position || 'top-right'

  const container = document.createElement('div')
  container.id = id
  container.style.zIndex = String(PopupManager.nextZIndex())
  instance = createApp(NotificationRenderer, { ...options, elRef }).mount(container)

  // if (isVNode(options.message)) {
  //   // instance.
  //   instance.$slots.default = [options.message]
  //   options.message = 'REPLACED_BY_VNODE'
  // }
  // instance.id = id
  // instance.mount()
  document.body.appendChild(container)
  // instance.visible = true
  // instance.dom = instance.$el
  // instance.dom.style.zIndex = String(PopupManager.nextZIndex())

  let verticalOffset = options.offset || 0
  instances
    .filter(item => item.$el.value.style.position === position)
    .forEach(item => {
      verticalOffset += (item.$el.value?.offsetHeight || 0) + 16
    })
  verticalOffset += 16
  options.offset = verticalOffset
  // console.log(instance)
  // instance.$data.verticalOffset = verticalOffset
  instances.push({ $el: elRef, instance: instance as ComponentPublicInstance<INotificationOptions, unknown, { verticalProperty: string }> })
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

export function close(id: string, userOnClose: (instance: ComponentPublicInstance) => void): void {
  const idx = instances.findIndex(i => {
    i.$el.value.id === id
  })
  if (idx === -1) {
    return
  }

  const { instance } = instances[idx]
  if (!instance) return
  userOnClose?.(instance)

  instances.splice(idx, 1)
  const len = instances.length
  if (len <= 1) return
  const position = instance.$el.value.style.position
  const removedHeight = instance.$el.value.offsetHeight
  for (let i = idx; i < len; i++) {
    if (instances[i].$el.value.style.position === position) {
      instances[i].$el.value.style[instance.verticalProperty] =
        parseInt(instances[i].$el.value.style[instance.$data.verticalProperty], 10) -
        removedHeight -
        16 +
        'px'
    }
  }
}

export function closeAll(): void {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].instance.onClose()
  }
}

export default Notification
