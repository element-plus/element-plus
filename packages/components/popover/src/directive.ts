import type { DirectiveBinding, ObjectDirective } from 'vue'
import type { PopoverInstance } from './popover'

const attachEvents = (el: HTMLElement, binding: DirectiveBinding) => {
  const popperComponent: PopoverInstance = binding.arg || binding.value
  const popover = popperComponent?.popperRef
  if (popover) {
    popover.triggerRef = el
  }
}

export default {
  mounted(el, binding) {
    attachEvents(el, binding)
  },
  updated(el, binding) {
    attachEvents(el, binding)
  },
} as ObjectDirective

export const VPopover = 'popover'
