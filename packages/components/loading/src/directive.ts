import Loading from './index'

import type { DirectiveBinding } from 'vue'

const createInstance = (el: HTMLElement, binding: DirectiveBinding) => {
  const textExr = el.getAttribute('element-loading-text')
  const spinnerExr = el.getAttribute('element-loading-spinner')
  const svgExr = el.getAttribute('element-loading-svg')
  const svgViewBoxExr = el.getAttribute('element-loading-svg-view-box')
  const backgroundExr = el.getAttribute('element-loading-background')
  const customClassExr = el.getAttribute('element-loading-custom-class')
  const vm = binding.instance
  ;(el as any).instance = Loading({
    text: vm && vm[textExr] || textExr,
    svg: vm && vm[svgExr] || svgExr,
    svgViewBox: vm && vm[svgViewBoxExr] || svgViewBoxExr,
    spinner: vm && vm[spinnerExr] || spinnerExr,
    background: vm && vm[backgroundExr] || backgroundExr,
    customClass: vm && vm[customClassExr] || customClassExr,
    fullscreen: !!binding.modifiers.fullscreen,
    target: !!binding.modifiers.fullscreen ? null : el,
    body: !!binding.modifiers.body,
    visible: true,
    lock: !!binding.modifiers.lock,
  })
}

const vLoading = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if(!!binding.value){
      createInstance(el, binding)
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const instance = (el as any).instance
    if (binding.oldValue !== binding.value) {
      if(binding.value) {
        createInstance(el, binding)
      } else {
        instance.close()
      }
    }
  },
  unmounted(el: HTMLElement) {
    (el as any)?.instance?.close()
  },
}

export default vLoading
