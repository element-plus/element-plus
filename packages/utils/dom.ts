import { isClient } from '@vueuse/core'
import { camelize, isObject } from './util'
import type { CSSProperties } from 'vue'

import type { Nullable } from './types'

/* istanbul ignore next */
const trimArr = function (s: string) {
  return (s || '').split(' ').filter((item) => !!item.trim())
}

/* istanbul ignore next */
export const on = function (
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element?.addEventListener(event, handler, useCapture)
  }
}

/* istanbul ignore next */
export const off = function (
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element?.removeEventListener(event, handler, useCapture)
  }
}

/* istanbul ignore next */
export const once = function (
  el: HTMLElement,
  event: string,
  fn: EventListener
): void {
  const listener = function (this: any, ...args: any) {
    if (fn) {
      fn.apply(this, args)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

/* istanbul ignore next */
export function hasClass(el: HTMLElement | Element, cls: string): boolean {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1)
    throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    const className = el.getAttribute('class') || ''
    return className.split(' ').includes(cls)
  }
}

/* istanbul ignore next */
export function addClass(el: HTMLElement | Element, cls: string): void {
  if (!el) return
  let className = el.getAttribute('class') || ''
  const curClass = trimArr(className)
  const classes = (cls || '')
    .split(' ')
    .filter((item) => !curClass.includes(item) && !!item.trim())

  if (el.classList) {
    el.classList.add(...classes)
  } else {
    className += ` ${classes.join(' ')}`
    el.setAttribute('class', className)
  }
}

/* istanbul ignore next */
export function removeClass(el: HTMLElement | Element, cls: string): void {
  if (!el || !cls) return
  const classes = trimArr(cls)
  let curClass = el.getAttribute('class') || ''

  if (el.classList) {
    el.classList.remove(...classes)
    return
  }
  classes.forEach((item) => {
    curClass = curClass.replace(` ${item} `, ' ')
  })
  const className = trimArr(curClass).join(' ')
  el.setAttribute('class', className)
}

/* istanbul ignore next */
// Here I want to use the type CSSProperties, but the definition for CSSProperties
// has { [index: number]: string } in its type annotation, which does not satisfy the method
// camelize(s: string)
// Same as the return type
export const getStyle = function (
  element: HTMLElement,
  styleName: string
): string {
  if (!isClient) return ''
  if (!element || !styleName) return ''
  styleName = camelize(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const style = element.style[styleName]
    if (style) return style
    const computed = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[styleName] : ''
  } catch (e) {
    return element.style[styleName]
  }
}

/* istanbul ignore next */
export function setStyle(
  element: HTMLElement,
  styleName: CSSProperties | string,
  value?: string
): void {
  if (!element || !styleName) return

  if (isObject(styleName)) {
    Object.keys(styleName).forEach((prop) => {
      setStyle(element, prop, styleName[prop])
    })
  } else {
    styleName = camelize(styleName)
    element.style[styleName] = value
  }
}

export function removeStyle(
  element: HTMLElement,
  style: CSSProperties | string
) {
  if (!element || !style) return

  if (isObject(style)) {
    Object.keys(style).forEach((prop) => {
      setStyle(element, prop, '')
    })
  } else {
    setStyle(element, style, '')
  }
}

export const isScroll = (
  el: HTMLElement,
  isVertical?: Nullable<boolean>
): RegExpMatchArray | null => {
  if (!isClient) return null
  const determinedDirection = isVertical === null || isVertical === undefined
  const overflow = determinedDirection
    ? getStyle(el, 'overflow')
    : isVertical
    ? getStyle(el, 'overflow-y')
    : getStyle(el, 'overflow-x')

  return overflow.match(/(scroll|auto|overlay)/)
}

export const getScrollContainer = (
  el: HTMLElement,
  isVertical?: Nullable<boolean>
): Window | HTMLElement | undefined => {
  if (!isClient) return

  let parent: HTMLElement = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }
    if (isScroll(parent, isVertical)) {
      return parent
    }
    parent = parent.parentNode as HTMLElement
  }
  return parent
}

export const isInContainer = (
  el: Element | undefined,
  container: Element | Window | undefined
): boolean => {
  if (!isClient || !el || !container) return false

  const elRect = el.getBoundingClientRect()

  let containerRect: Pick<DOMRect, 'top' | 'bottom' | 'left' | 'right'>
  if (container instanceof Element) {
    containerRect = container.getBoundingClientRect()
  } else {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    }
  }
  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  )
}

export const getOffsetTop = (el: HTMLElement) => {
  let offset = 0
  let parent = el

  while (parent) {
    offset += parent.offsetTop
    parent = parent.offsetParent as HTMLElement
  }

  return offset
}

export const getOffsetTopDistance = (
  el: HTMLElement,
  containerEl: HTMLElement
) => {
  return Math.abs(getOffsetTop(el) - getOffsetTop(containerEl))
}

export const stop = (e: Event) => e.stopPropagation()

export const getClientXY = (event: MouseEvent | TouchEvent) => {
  let clientX: number
  let clientY: number
  if (event.type === 'touchend') {
    clientY = (event as TouchEvent).changedTouches[0].clientY
    clientX = (event as TouchEvent).changedTouches[0].clientX
  } else if (event.type.startsWith('touch')) {
    clientY = (event as TouchEvent).touches[0].clientY
    clientX = (event as TouchEvent).touches[0].clientX
  } else {
    clientY = (event as MouseEvent).clientY
    clientX = (event as MouseEvent).clientX
  }
  return {
    clientX,
    clientY,
  }
}

export const composeEventHandlers = <E>(
  theirsHandler?: (event: E) => void,
  oursHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) => {
  const handleEvent = (event: E) => {
    theirsHandler?.(event)

    if (
      checkForDefaultPrevented === false ||
      !(event as unknown as Event).defaultPrevented
    ) {
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
