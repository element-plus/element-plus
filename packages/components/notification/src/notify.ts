import { createVNode, isVNode, render } from 'vue'
import {
  debugWarn,
  isClient,
  isElement,
  isFunction,
  isString,
  isUndefined,
} from '@element-plus/utils'
import NotificationConstructor from './notification.vue'
import { notificationTypes } from './notification'

import type { Ref, VNode } from 'vue'
import type {
  NotificationOptions,
  NotificationProps,
  NotificationQueue,
  Notify,
  NotifyFn,
} from './notification'

// This should be a queue but considering there were `non-autoclosable` notifications.
const notifications: Record<
  NotificationOptions['position'],
  NotificationQueue
> = {
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  'bottom-right': [],
}

// the gap size between each notification
const GAP_SIZE = 16
let seed = 1

const notify: NotifyFn & Partial<Notify> = function (options = {}, context) {
  if (!isClient) return { close: () => undefined }

  if (isString(options) || isVNode(options)) {
    options = { message: options }
  }

  const position = options.position || 'top-right'

  let verticalOffset = options.offset || 0
  notifications[position].forEach(({ vm }) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + GAP_SIZE
  })
  verticalOffset += GAP_SIZE

  const id = `notification_${seed++}`
  const userOnClose = options.onClose
  const props: Partial<NotificationProps> = {
    ...options,
    offset: verticalOffset,
    id,
    onClose: () => {
      close(id, position, userOnClose)
    },
  }

  let appendTo: HTMLElement | null = document.body
  if (isElement(options.appendTo)) {
    appendTo = options.appendTo
  } else if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo)
  }

  // should fallback to default value with a warning
  if (!isElement(appendTo)) {
    debugWarn(
      'ElNotification',
      'the appendTo option is not an HTMLElement. Falling back to document.body.'
    )
    appendTo = document.body
  }

  const container = document.createElement('div')

  const vm = createVNode(
    NotificationConstructor,
    props,
    isFunction(props.message)
      ? props.message
      : isVNode(props.message)
      ? () => props.message
      : null
  )
  vm.appContext = isUndefined(context) ? notify._context : context

  // clean notification element preventing mem leak
  vm.props!.onDestroy = () => {
    render(null, container)
  }

  // instances will remove this item when close function gets called. So we do not need to worry about it.
  render(vm, container)
  notifications[position].push({ vm })
  appendTo.appendChild(container.firstElementChild!)

  return {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => {
      ;(vm.component!.exposed as { visible: Ref<boolean> }).visible.value =
        false
    },
  }
}
notificationTypes.forEach((type) => {
  notify[type] = (options = {}, appContext) => {
    if (isString(options) || isVNode(options)) {
      options = {
        message: options,
      }
    }
    return notify({ ...options, type }, appContext)
  }
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
  position: NotificationOptions['position'],
  userOnClose?: (vm: VNode) => void
): void {
  // maybe we can store the index when inserting the vm to notification list.
  const orientedNotifications = notifications[position]
  const idx = orientedNotifications.findIndex(
    ({ vm }) => vm.component?.props.id === id
  )
  if (idx === -1) return
  const { vm } = orientedNotifications[idx]
  if (!vm) return
  // calling user's on close function before notification gets removed from DOM.
  userOnClose?.(vm)

  // note that this is called @before-leave, that's why we were able to fetch this property.
  const removedHeight = vm.el!.offsetHeight
  const verticalPos = position.split('-')[0]
  orientedNotifications.splice(idx, 1)
  const len = orientedNotifications.length
  if (len < 1) return
  // starting from the removing item.
  for (let i = idx; i < len; i++) {
    // new position equals the current offsetTop minus removed height plus 16px(the gap size between each item)
    const { el, component } = orientedNotifications[i].vm
    const pos =
      Number.parseInt(el!.style[verticalPos], 10) - removedHeight - GAP_SIZE
    component!.props.offset = pos
  }
}

export function closeAll(): void {
  // loop through all directions, close them at once.
  for (const orientedNotifications of Object.values(notifications)) {
    orientedNotifications.forEach(({ vm }) => {
      // same as the previous close method, we'd like to make sure lifecycle gets handle properly.
      ;(vm.component!.exposed as { visible: Ref<boolean> }).visible.value =
        false
    })
  }
}

notify.closeAll = closeAll
notify._context = null

export default notify as Notify
