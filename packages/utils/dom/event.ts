/** @deprecated use `element.addEventListener` instead */
export const on = (
  element: HTMLElement | Document | Window | Element,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void => {
  if (element && event && handler) {
    element?.addEventListener(event, handler, useCapture)
  }
}

/** @deprecated use `element.addEventListener` instead */
export const off = (
  element: HTMLElement | Document | Window | Element,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void => {
  if (element && event && handler) {
    element?.removeEventListener(event, handler, useCapture)
  }
}

/** @deprecated use `element.addEventListener` instead */
export const once = (
  el: HTMLElement,
  event: string,
  fn: EventListener
): void => {
  const listener = function (this: any, ...args: any) {
    if (fn) {
      fn.apply(this, args)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

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
