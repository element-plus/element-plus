import {DirectiveBinding, VNode} from 'vue'
import isServer from './isServer'
import { on } from './dom'

const nodeList = []
const ctx = '@@clickoutsideContext'

let startClick
let seed = 0

!isServer && on(document, 'mousedown', e => (startClick = e))

!isServer &&
  on(document, 'mouseup', (e: Event) => {
    nodeList.forEach(node => node[ctx].documentHandler(e, startClick))
  })

function createDocumentHandler(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
  return function(mouseup = {}, mousedown = {}) {
    if (
      !vnode ||
      !vnode.component ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.component.popperElm &&
        (vnode.component.popperElm.contains(mouseup.target) ||
          vnode.component.popperElm.contains(mousedown.target)))
    )
      return

    if (
      binding.value &&
      el[ctx].methodName &&
      vnode.component[el[ctx].methodName]
    ) {
      vnode.component[el[ctx].methodName]()
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn()
    }
  }
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode):void {
    nodeList.push(el)
    const id = seed++
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.arg,
      bindingFn: binding.value,
    }
  },

  updated(el: HTMLElement, binding: DirectiveBinding, vnode: VNode): void {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode)
    el[ctx].methodName = binding.arg
    el[ctx].bindingFn = binding.value
  },

  unmounted(el: HTMLElement): void {
    const len = nodeList.length

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1)
        break
      }
    }
    delete el[ctx]
  },
}
