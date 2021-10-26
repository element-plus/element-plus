import { on } from '@element-plus/utils/dom'
import isServer from '@element-plus/utils/isServer'

import { isVNode } from '@element-plus/utils/util'
import type {
  ComponentPublicInstance,
  DirectiveBinding,
  ObjectDirective,
} from 'vue'
import type { Nullable } from '@element-plus/utils/types'

type DocumentHandler = <T extends MouseEvent>(mouseup: T, mousedown: T) => void
type FlushList = Map<
  HTMLElement,
  {
    binding: DirectiveBinding
    documentHandler: DocumentHandler
    bindingFn: (...args: unknown[]) => unknown
  }[]
>

const nodeList: FlushList = new Map()

let startClick: MouseEvent

if (!isServer) {
  on(document, 'mousedown', (e: MouseEvent) => (startClick = e))
  on(document, 'mouseup', (e: MouseEvent) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick)
      }
    }
  })
}

function addExcludes(excludes: HTMLElement[], tempArg) {
  nodeList.forEach((value, tempEl) => {
    if (
      tempArg.toString().includes(tempEl.toString()) ||
      (tempEl.offsetParent &&
        tempArg.toString().includes(tempEl.offsetParent.toString()))
    ) {
      for (let i = 0; i < value.length; i++) {
        excludes.push(value[i].binding.arg)
      }
    }
  })
}

function createDocumentHandler(
  el: HTMLElement,
  binding: DirectiveBinding
): DocumentHandler {
  let excludes: HTMLElement[] = []
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg
    binding.arg.forEach((tempArg) => {
      addExcludes(excludes, tempArg)
    })
  } else if ((binding.arg as unknown) instanceof HTMLElement) {
    // due to current implementation on binding type is wrong the type casting is necessary here
    excludes.push(binding.arg as unknown as HTMLElement)
    addExcludes(excludes, binding.arg)
  }
  return function (mouseup, mousedown) {
    const popperRef = (
      binding.instance as ComponentPublicInstance<{
        popperRef: Nullable<HTMLElement>
      }>
    ).popperRef
    const mouseUpTarget = mouseup.target as Node
    const mouseDownTarget = mousedown?.target as Node
    const isBound = !binding || !binding.instance
    const isTargetExists = !mouseUpTarget || !mouseDownTarget
    const isContainedByEl =
      el.contains(mouseUpTarget) || el.contains(mouseDownTarget)
    const isSelf = el === mouseUpTarget

    const isTargetExcluded =
      (excludes.length &&
        excludes.some((item) => item?.contains(mouseUpTarget))) ||
      (excludes.length && excludes.includes(mouseDownTarget as HTMLElement))
    const isContainedByPopper =
      popperRef &&
      (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget))
    if (
      isBound ||
      isTargetExists ||
      isContainedByEl ||
      isSelf ||
      isTargetExcluded ||
      isContainedByPopper
    ) {
      return
    }
    binding.value(mouseup, mousedown)
  }
}

const ClickOutside: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    // there could be multiple handlers on the element
    if (!nodeList.has(el)) {
      nodeList.set(el, [])
    }

    if (isVNode(binding.arg)) {
      binding.arg = binding.arg.el
    }

    nodeList.get(el).push({
      binding,
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    })
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    nodeList.forEach((value, key) => {
      for (let i = 0; i < value.length; i++) {
        const arg = value[i].binding.arg
        if (!arg) {
          break
        }
        if (
          arg.toString().includes(el.toString()) ||
          (el.offsetParent &&
            arg.toString().includes(el.offsetParent.toString()))
        ) {
          value[i].documentHandler = createDocumentHandler(
            key,
            value[i].binding
          )
        }
      }
    })

    if (!nodeList.has(el)) {
      nodeList.set(el, [])
    }

    if (isVNode(binding.arg)) {
      binding.arg = binding.arg.el
    }

    const handlers = nodeList.get(el)
    const oldHandlerIndex = handlers.findIndex(
      (item) => item.bindingFn === binding.oldValue
    )
    const newHandler = {
      binding,
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    }

    if (oldHandlerIndex >= 0) {
      // replace the old handler to the new handler
      handlers.splice(oldHandlerIndex, 1, newHandler)
    } else {
      handlers.push(newHandler)
    }
  },
  unmounted(el: HTMLElement) {
    // remove all listeners when a component unmounted
    nodeList.delete(el)
  },
}

export default ClickOutside
