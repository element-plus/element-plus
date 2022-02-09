import { EVENT_CODE } from '@element-plus/utils/aria'
import type { HTMLAttributes } from 'vue'

type Orientation = HTMLAttributes['aria-orientation']
type Direction = 'ltr' | 'rtl'
type FocusIntent = 'first' | 'last' | 'prev' | 'next'

const MAP_KEY_TO_FOCUS_INTENT: Record<string, FocusIntent> = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
}

const getDirectionAwareKey = (key: string, dir?: Direction) => {
  if (dir !== 'rtl') return key

  switch (key) {
    case EVENT_CODE.right:
      return EVENT_CODE.left
    case EVENT_CODE.left:
      return EVENT_CODE.right
    default:
      return key
  }
}

export const getFocusIntent = (
  event: KeyboardEvent,
  orientation?: Orientation,
  dir?: Direction
) => {
  const key = getDirectionAwareKey(event.key, dir)
  if (
    orientation === 'vertical' &&
    [EVENT_CODE.left, EVENT_CODE.right].includes(key)
  )
    return undefined
  if (
    orientation === 'horizontal' &&
    [EVENT_CODE.up, EVENT_CODE.down].includes(key)
  )
    return undefined
  return MAP_KEY_TO_FOCUS_INTENT[key]
}

export const reorderArray = <T>(array: T[], atIdx: number) => {
  return array.map((_, idx) => array[(idx + atIdx) % array.length])
}

export const focusFirst = (elements: HTMLElement[]) => {
  const { activeElement: prevActive } = document

  for (const element of elements) {
    if (element === prevActive) return
    element.focus()
    if (prevActive !== document.activeElement) return
  }
}
