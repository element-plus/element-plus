import isServer from './isServer'

const globalNodes = []
let target = isServer ? undefined : document.body

export function createGlobalNode(id?: string) {
  const el = document.createElement('div')

  if (id !== undefined) {
    el.id = id
  }

  target.appendChild(el)
  globalNodes.push(el)

  return el
}

export function removeGlobalNode(el: HTMLElement) {
  globalNodes.splice(globalNodes.indexOf(el), 1)
  el.remove()
}

export function changeGlobalNodesTarget(el: HTMLElement) {
  if (el !== target) {
    target = el

    globalNodes.forEach((el) => {
      if (el.contains(target) === false) {
        target.appendChild(el)
      }
    })
  }
}
