import type { Nullable } from '@element-plus/utils/types'
import type { default as CascaderNode } from './node'

export const isLeaf = (el: HTMLElement) => !el.getAttribute('aria-owns')

export const getSibling = (
  el: HTMLElement,
  distance: number
): Nullable<Element> => {
  const { parentNode } = el

  if (!parentNode) return null

  const siblings = parentNode.querySelectorAll(
    '.el-cascader-node[tabindex="-1"]'
  )
  const index = Array.prototype.indexOf.call(siblings, el)
  return siblings[index + distance] || null
}

export const getMenuIndex = (el: HTMLElement) => {
  if (!el) return 0
  const pieces = el.id.split('-')
  return Number(pieces[pieces.length - 2])
}

export const focusNode = (el) => {
  if (!el) return
  el.focus()
  !isLeaf(el) && el.click()
}

export const checkNode = (el) => {
  if (!el) return

  const input = el.querySelector('input')
  if (input) {
    input.click()
  } else if (isLeaf(el)) {
    el.click()
  }
}

export const sortByOriginalOrder = (
  oldNodes: CascaderNode[],
  newNodes: CascaderNode[]
) => {
  const newNodesCopy = newNodes.slice(0)
  const newIds = newNodesCopy.map((node) => node.uid)
  const res = oldNodes.reduce((acc, item) => {
    const index = newIds.indexOf(item.uid)
    if (index > -1) {
      acc.push(item)
      newNodesCopy.splice(index, 1)
      newIds.splice(index, 1)
    }
    return acc
  }, [] as CascaderNode[])

  res.push(...newNodesCopy)

  return res
}
