import { cAF, isString, rAF } from '@element-plus/utils'

import type { InjectionKey, Ref } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks'

export interface AnchorLinkState {
  el: HTMLElement
  href: string
}

export interface AnchorContext {
  ns: UseNamespaceReturn
  direction: string
  current: Ref<string>
  addLink(state: AnchorLinkState): void
  removeLink(href: string): void
  handleClick(e: MouseEvent, href?: string): void
}

export const anchorKey: InjectionKey<AnchorContext> = Symbol('anchor')

export const isWindow = (target: any): target is Window => {
  return target === window
}

export const getElement = (target?: string | HTMLElement | Window | null) => {
  if (!target) return
  if (isString(target)) {
    return document.querySelector<HTMLElement>(target)
  }
  return target
}

export const getScrollElement = (
  target: HTMLElement,
  container: HTMLElement | Window
) => {
  if (isWindow(container)) {
    return target.ownerDocument.documentElement
  }
  return container
}

export const getScrollTop = (container: HTMLElement | Window) => {
  if (isWindow(container)) {
    return window.scrollY
  }
  return container.scrollTop
}

export function throttleByRaf(cb: (...args: any[]) => void) {
  let timer = 0

  const throttle = (...args: any[]): void => {
    if (timer) {
      cAF(timer)
    }
    timer = rAF(() => {
      cb(...args)
      timer = 0
    })
  }

  throttle.cancel = () => {
    cAF(timer)
    timer = 0
  }

  return throttle
}

export function animateScrollTo(
  container: HTMLElement | Window,
  from: number,
  to: number,
  duration: number,
  callback: unknown
) {
  const startTime = Date.now()

  const scroll = () => {
    const timestamp = Date.now()
    const time = timestamp - startTime
    const nextScrollTop = easeInOutCubic(
      time > duration ? duration : time,
      from,
      to,
      duration
    )

    if (isWindow(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop)
    } else {
      container.scrollTop = nextScrollTop
    }
    if (time < duration) {
      rAF(scroll)
    } else if (typeof callback === 'function') {
      callback()
    }
  }

  scroll()
}

export function easeInOutCubic(t: number, b: number, c: number, d: number) {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t * t + b
  }
  return (cc / 2) * ((t -= 2) * t * t + 2) + b
}
