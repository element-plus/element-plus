export function isEleEllipsis(ele: HTMLElement) {
  const childDiv = document.createElement('em')
  ele.appendChild(childDiv)

  const rect = ele.getBoundingClientRect()
  const childRect = childDiv.getBoundingClientRect()

  // Reset
  ele.removeChild(childDiv)

  return (
    // Horizontal out of range
    rect.left > childRect.left ||
    childRect.right > rect.right ||
    // Vertical out of range
    rect.top > childRect.top ||
    childRect.bottom > rect.bottom
  )
}
