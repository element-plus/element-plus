import { isClient } from '@vueuse/core'

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
    document.removeEventListener('mousemove', moveFn)
    document.removeEventListener('mouseup', upFn)
    document.removeEventListener('touchmove', moveFn)
    document.removeEventListener('touchend', upFn)
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
    document.addEventListener('mousemove', moveFn)
    document.addEventListener('mouseup', upFn)
    document.addEventListener('touchmove', moveFn)
    document.addEventListener('touchend', upFn)

    isDragging = true

    options.start?.(event)
  }

  element.addEventListener('mousedown', downFn)
  element.addEventListener('touchstart', downFn)
}
