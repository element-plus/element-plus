import { DirectiveBinding, VNode } from 'vue'

const getReference = (el: HTMLElement, binding: DirectiveBinding, vnode: VNode) => {
  const _ref = binding.arg || binding.value
  const popover: any = vnode.dirs[0].instance.$refs[_ref]

  if (popover) {
    if (Array.isArray(popover)) {
      popover[0].reference = el
    } else {
      popover.reference = el
    }
  }
}

export default {
  beforeMount(el, binding, vnode) {
    getReference(el, binding, vnode)
  },
  mounted(el, binding, vnode) {
    getReference(el, binding, vnode)
  },
}
