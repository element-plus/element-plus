import type { DirectiveBinding, VNode, ObjectDirective } from 'vue'
import { on } from '@element-plus/utils/dom'

interface PopoverInstance {
  events: Record<string, EventListenerOrEventListenerObject>
  triggerRef: HTMLElement
  tabindex: string
}

const attachEvents = (el: HTMLElement, binding: DirectiveBinding, vnode: VNode) => {
  const _ref = binding.arg || binding.value
  const popover = vnode.dirs[0].instance.$refs[_ref] as PopoverInstance
  if (popover) {
    popover.triggerRef = el
    el.setAttribute('tabindex', popover.tabindex)
    // because v-popover cannot modify the vnode itself due to it has already been
    Object.entries(popover.events).forEach(([eventName, e]) => {
      on(el, eventName.toLowerCase().slice(2), e)
    })
  }
}

export default {
  mounted(el, binding, vnode) {
    attachEvents(el, binding, vnode)
  },
  updated(el, binding, vnode) {
    attachEvents(el, binding, vnode)
  },
} as ObjectDirective

export const VPopover = 'popover'
