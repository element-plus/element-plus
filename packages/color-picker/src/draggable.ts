import isServer from '@element-plus/utils/isServer'
import { on, off } from '@element-plus/utils/dom'
let isDragging = false

export declare interface IOptions {
  drag?: (event: Event) => void
  start?: (event: Event) => void
  end?: (event: Event) => void
}

const noopFunc = () => false

export default function(element: HTMLElement, options: IOptions) {
  if (isServer) return

  const moveFn = function(event: Event) {
    options.drag?.(event)
  }

  const upFn = function(event: Event) {

    off(document, 'mousemove',moveFn)
    off(document, 'mouseup', upFn)
    off(document, 'selectstart', noopFunc)
    off(document, 'dragstart', noopFunc)

    isDragging = false

    options.end?.(event)
  }

  on(element, 'mousedown', function(event) {
    if (isDragging) return
    on(document, 'selectstart', noopFunc)
    on(document, 'dragstart', noopFunc)
    on(document, 'mousemove', moveFn)
    on(document, 'mouseup', upFn)

    isDragging = true

    options.start?.(event)
  })
}
