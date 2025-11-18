import { isClient } from '../browser'

const globalNodes: HTMLElement[] = []
let target: HTMLElement | undefined = !isClient ? undefined : document.body

export function createGlobalNode(id?: string) {
  const el = document.createElement('div')
  if (id !== undefined) {
    el.setAttribute('id', id)
  }

  if (target) {
    target.appendChild(el)
    globalNodes.push(el)
  }

  return el
}

export function removeGlobalNode(el: HTMLElement) {
  globalNodes.splice(globalNodes.indexOf(el), 1)
  el.remove()
}

export function changeGlobalNodesTarget(el: HTMLElement) {
  if (el === target) return

  target = el
  globalNodes.forEach((el) => {
    if (target && !el.contains(target)) {
      target.appendChild(el)
    }
  })
}
