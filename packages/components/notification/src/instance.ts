import { shallowReactive } from 'vue'

import type { NotificationOptions, NotificationQueue } from './notification'

// the gap size between each notification
export const GAP_SIZE = 16

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

export const isPrevInstanceRendered = (
  id: string,
  position: NotificationOptions['position']
): boolean => {
  const { prev } = getInstance(id, position)

  if (!prev) return true

  return (prev.vm.el?.offsetHeight ?? 0) > 0
}
