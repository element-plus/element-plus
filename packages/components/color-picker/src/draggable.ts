import { isClient } from '@vueuse/core'
import { off, on } from '@element-plus/utils'

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
    document.addEventListener('touchmove', moveFn, { passive: true })
    document.addEventListener('touchend', upFn, { passive: true })

    isDragging = true

    options.start?.(event)
  }

  on(element, 'mousedown', downFn)
  document.addEventListener('touchstart', downFn, { passive: true })
}
