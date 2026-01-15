import { createVNode, isVNode, render, shallowReactive } from 'vue'
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
export const notifications: Record<
  NotificationOptions['position'],
  NotificationQueue
> = {
  'top-left': shallowReactive([]),
  'top-right': shallowReactive([]),
  'bottom-left': shallowReactive([]),
  'bottom-right': shallowReactive([]),
}

// the gap size between each notification
const GAP_SIZE = 16
let seed = 1

export const getInstance = (
  id: string,
  position: NotificationOptions['position']
) => {
  const list = notifications[position] || []
  const idx = list.findIndex(({ vm }) => vm.component!.props.id === id)
  const current = list[idx]
  const prev = idx > 0 ? list[idx - 1] : undefined
  return { current, prev }
}

export const getLastOffset = (
  id: string,
  position: NotificationOptions['position']
): number => {
  const { prev } = getInstance(id, position)
  if (!prev) return 0
  return prev.vm.component!.exposed!.bottom.value
}

export const getOffsetOrSpace = (
  id: string,
  offset: number,
  position: NotificationOptions['position']
) => {
  const list = notifications[position] || []
  const idx = list.findIndex(({ vm }) => vm.component!.props.id === id)
  return idx > 0 ? GAP_SIZE : offset
}

const notify: NotifyFn & Partial<Notify> = function (options = {}, context) {
  if (!isClient) return { close: () => undefined }

  if (isString(options) || isVNode(options)) {
    options = { message: options }
  }

  const position = options.position || 'top-right'
  const positionInstances = notifications[position]

  const id = `notification_${seed++}`
  const userOnClose = options.onClose
  const props: Partial<NotificationProps> = {
    ...options,
    offset: options.offset ?? GAP_SIZE,
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
    // Remove from instances after animation is done
    const idx = positionInstances.findIndex(
      (instance) => instance.vm.component!.props.id === id
    )
    if (idx !== -1) {
      positionInstances.splice(idx, 1)
    }
  }

  // instances will remove this item when close function gets called. So we do not need to worry about it.
  render(vm, container)
  positionInstances.push({ vm })
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
  if (!orientedNotifications?.length) return

  const idx = orientedNotifications.findIndex(
    ({ vm }) => vm.component?.props.id === id
  )
  if (idx === -1) return

  const { vm } = orientedNotifications[idx]
  if (!vm) return

  // calling user's on close function before notification gets removed from DOM.
  userOnClose?.(vm)
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

export function updateOffsets(
  position: NotificationOptions['position'] = 'top-right'
) {
  let verticalOffset =
    notifications[position][0]?.vm.component?.props?.offset || 0

  for (const { vm } of notifications[position]) {
    vm.component!.props.offset = verticalOffset
    verticalOffset += (vm.el?.offsetHeight || 0) + GAP_SIZE
  }
}

notify.closeAll = closeAll
notify.updateOffsets = updateOffsets
notify._context = null

export default notify as Notify
