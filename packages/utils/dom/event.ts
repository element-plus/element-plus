import { EVENT_CODE } from '@element-plus/constants'
import { isAndroid } from '../browser'

export const composeEventHandlers = <E>(
  theirsHandler?: (event: E) => boolean | void,
  oursHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) => {
  const handleEvent = (event: E) => {
    const shouldPrevent = theirsHandler?.(event)

    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler?.(event)
    }
  }
  return handleEvent
}

type WhenMouseHandler = (e: PointerEvent) => any
export const whenMouse = (handler: WhenMouseHandler): WhenMouseHandler => {
  return (e: PointerEvent) =>
    e.pointerType === 'mouse' ? handler(e) : undefined
}

export const getEventCode = (event: KeyboardEvent): string => {
  if (event.code && event.code !== 'Unidentified') return event.code
  // On android, event.code is always '' (see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#browser_compatibility)
  const key = getEventKey(event)

  if (key) {
    if (Object.values(EVENT_CODE).includes(key)) return key

    switch (key) {
      case ' ':
        return EVENT_CODE.space
      default:
        return ''
    }
  }

  return ''
}

export const getEventKey = (event: KeyboardEvent): string => {
  let key = event.key && event.key !== 'Unidentified' ? event.key : ''

  // On Android, event.key and event.code may not be useful when entering characters or space
  // So here we directly get the last character of the input
  // **only takes effect in the keyup event**
  if (!key && event.type === 'keyup' && isAndroid()) {
    const target = event.target as HTMLInputElement
    key = target.value.charAt(target.selectionStart! - 1)
  }

  return key
}
