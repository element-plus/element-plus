import { on } from '@element-plus/utils/dom';
import isServer from '@element-plus/utils/isServer';
import type { ComponentPublicInstance, DirectiveBinding, ObjectDirective } from 'vue';


type DocumentHandler = <T extends Event>(mouseup: T, mousedown: T) => void;

type FlushList = Map<
  HTMLElement,
  {
    documentHandler: DocumentHandler
    bindingFn: (...args: unknown[]) => unknown
  }
>;

const nodeList: FlushList = new Map()

let startClick: Event

if (!isServer) {
  on(document, 'mousedown', e => (startClick = e))
  on(document, 'mouseup', e => {
    for (const { documentHandler } of nodeList.values()) {
      documentHandler(e, startClick)
    }
  })
}

function createDocumentHandler(
  el: HTMLElement,
  binding: DirectiveBinding,
): DocumentHandler {
  return function(mouseup, mousedown) {
    const popperRef = (binding.instance as ComponentPublicInstance<{
      popperRef: Nullable<HTMLElement>
    }>).popperRef
    if (
      !binding ||
      !binding.instance ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target as Node) ||
      el.contains(mousedown.target as Node) ||
      el === mouseup.target ||
      (popperRef &&
        (popperRef.contains(mouseup.target as Node) ||
          popperRef.contains(mousedown.target as Node)))
    ) {
      return
    }
    binding.value()
  }
}

const ClickOutside: ObjectDirective = {
  beforeMount(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    })
  },
  updated(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    })
  },
  unmounted(el) {
    nodeList.delete(el)
  },
}

export default ClickOutside
