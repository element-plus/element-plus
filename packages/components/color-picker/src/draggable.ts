import { isClient } from '@vueuse/core'
import { on, off } from '@element-plus/utils-v2'

let isDragging = false

export declare interface IOptions {
  drag?: (event: Event) => void
  start?: (event: Event) => void
  end?: (event: Event) => void
}

export default function (element: HTMLElement, options: IOptions) {
  if (!isClient) return

  const moveFn = function (event: Event) {
    options.drag?.(event)
  }

  const upFn = function (event: Event) {
    off(document, 'mousemove', moveFn)
    off(document, 'mouseup', upFn)
    off(document, 'touchmove', moveFn)
    off(document, 'touchend', upFn)
    document.onselectstart = null
    document.ondragstart = null

    isDragging = false

    options.end?.(event)
  }

  const downFn = function (event: Event) {
    if (isDragging) return
    event.preventDefault()
    document.onselectstart = () => false
    document.ondragstart = () => false
    on(document, 'mousemove', moveFn)
    on(document, 'mouseup', upFn)
    on(document, 'touchmove', moveFn)
    on(document, 'touchend', upFn)

    isDragging = true

    options.start?.(event)
  }

  on(element, 'mousedown', downFn)
  on(element, 'touchstart', downFn)
}
