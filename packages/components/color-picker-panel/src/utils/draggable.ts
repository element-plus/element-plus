import { isClient } from '@element-plus/utils'

let isDragging = false

export interface DraggableOptions {
  drag?: (event: MouseEvent | TouchEvent | PointerEvent) => void
  start?: (event: MouseEvent | TouchEvent | PointerEvent) => void
  end?: (event: MouseEvent | TouchEvent | PointerEvent) => void
}

export function draggable(element: HTMLElement, options: DraggableOptions) {
  if (!isClient) return

  const moveFn = function (event: MouseEvent | TouchEvent | PointerEvent) {
    options.drag?.(event)
  }

  const upFn = function (event: MouseEvent | TouchEvent | PointerEvent) {
    document.removeEventListener('mousemove', moveFn)
    document.removeEventListener('mouseup', upFn)
    document.removeEventListener('touchmove', moveFn)
    document.removeEventListener('touchend', upFn)
    document.onselectstart = null
    document.ondragstart = null

    isDragging = false

    options.end?.(event)
  }

  const pointerMoveFn = function (event: PointerEvent) {
    moveFn(event)
  }

  const pointerUpLikeFn = function (event: PointerEvent) {
    try {
      if (element.hasPointerCapture?.(event.pointerId)) {
        element.releasePointerCapture(event.pointerId)
      }
    } catch {
      /* ignore */
    }
    element.removeEventListener('pointermove', pointerMoveFn)
    element.removeEventListener('pointerup', pointerUpLikeFn)
    element.removeEventListener('pointercancel', pointerUpLikeFn)
    element.removeEventListener('lostpointercapture', pointerUpLikeFn)
    upFn(event)
  }

  const pointerDownFn = function (event: PointerEvent) {
    if (isDragging) return
    if (event.button !== undefined && event.button !== 0) return

    event.preventDefault()
    document.onselectstart = () => false
    document.ondragstart = () => false

    try {
      element.setPointerCapture(event.pointerId)
    } catch {
      /* ignore */
    }

    element.addEventListener('pointermove', pointerMoveFn)
    element.addEventListener('pointerup', pointerUpLikeFn)
    element.addEventListener('pointercancel', pointerUpLikeFn)
    element.addEventListener('lostpointercapture', pointerUpLikeFn)

    isDragging = true
    options.start?.(event)
  }

  const downFn = function (event: MouseEvent | TouchEvent) {
    if (isDragging) return
    if (event instanceof TouchEvent) {
      event.preventDefault()
    }
    document.onselectstart = () => false
    document.ondragstart = () => false
    document.addEventListener('mousemove', moveFn)
    document.addEventListener('mouseup', upFn)
    document.addEventListener('touchmove', moveFn)
    document.addEventListener('touchend', upFn)

    isDragging = true

    options.start?.(event)
  }

  if ('PointerEvent' in window) {
    element.addEventListener('pointerdown', pointerDownFn)
  } else {
    element.addEventListener('mousedown', downFn)
    element.addEventListener('touchstart', downFn, { passive: false })
  }
}
