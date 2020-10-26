import Loading from './index'

const vLoading = {
  mounted(el, binding) {
    const textExr = el.getAttribute('element-loading-text')
    const spinnerExr = el.getAttribute('element-loading-spinner')
    const backgroundExr = el.getAttribute('element-loading-background')
    const customClassExr = el.getAttribute('element-loading-custom-class')
    const vm = binding.instance
    const instance = Loading({
      text: vm && vm[textExr] || textExr,
      spinner: vm && vm[spinnerExr] || spinnerExr,
      background: vm && vm[backgroundExr] || backgroundExr,
      customClass: vm && vm[customClassExr] || customClassExr,
      fullscreen: !!binding.modifiers.fullscreen,
      target: !!binding.modifiers.fullscreen ? null : el,
      body: !!binding.modifiers.body,
      visible: !!binding.value,
      lock: !!binding.modifiers.lock,
    })
    el.instance = instance
  },
  updated(el, binding) {
    const instance = el.instance
    if(!instance) return
    instance.setText(el.getAttribute('element-loading-text'))
    if (binding.oldValue !== binding.value) {
      if(binding.value && !instance.visible.value) {
        instance.visible.value = true
      } else {
        instance.visible.value = false
      }
    }
  },
  unmounted(el) {
    el?.instance?.close()
  },
}

export default vLoading
