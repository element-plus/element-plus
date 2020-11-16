import isServer from '@element-plus/utils/isServer'
let isDragging = false

export declare interface IOptions {
  drag?: (event: Event) => void
  start?: (event: Event) => void
  end?: (event: Event) => void
}

export default function(element: HTMLElement, options: IOptions) {
  if (isServer) return
  const moveFn = function(event) {
    options.drag?.(event)
  }
  const upFn = function(event) {
    document.onmousemove = null
    document.onmouseup = null
    document.onselectstart = null
    document.ondragstart = null

    isDragging = false

    options.end?.(event)
  }
  element.onmousedown = function(event) {
    if (isDragging) return
    document.onselectstart = () => false
    document.ondragstart = () => false

    document.onmousemove = moveFn
    document.onmouseup = upFn
    isDragging = true

    options.start?.(event)
  }
}
