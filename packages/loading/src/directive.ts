import Loading from './index'

const createInstance = (el, binding) => {
  const textExr = el.getAttribute('element-loading-text')
  const spinnerExr = el.getAttribute('element-loading-spinner')
  const backgroundExr = el.getAttribute('element-loading-background')
  const customClassExr = el.getAttribute('element-loading-custom-class')
  const vm = binding.instance
  const emptyImage = el.getAttribute('element-loading-empty-image')
  const emptyImageSize = el.getAttribute('element-loading-empty-image-size')
  const emptyDescription = el.getAttribute('element-loading-empty-description')

  el.instance = Loading({
    text: vm && vm[textExr] || textExr,
    spinner: vm && vm[spinnerExr] || spinnerExr,
    background: vm && vm[backgroundExr] || backgroundExr,
    customClass: vm && vm[customClassExr] || customClassExr,
    fullscreen: !!binding.modifiers.fullscreen,
    target: !!binding.modifiers.fullscreen ? null : el,
    body: !!binding.modifiers.body,
    visible: true,
    lock: !!binding.modifiers.lock,
    showEmpty: true,
    empty: !!binding.modifiers.empty,
    emptyOption: {
      image: vm && vm[emptyImage] || emptyImage || '',
      imageSize: vm && vm[emptyImageSize] || Number(emptyImageSize),
      description: vm && vm[emptyDescription] || emptyDescription,
    },
  })
}

const vLoading = {
  mounted(el, binding) {
    if(!!binding.value){
      createInstance(el, binding)
    }
  },
  updated(el, binding) {
    const instance = el.instance
    if (binding.oldValue !== binding.value) {
      if(binding.value) {
        createInstance(el, binding)
      } else {
        instance.close()
      }
    } else if(instance.empty.value) {
      const showEmpty = el.getAttribute('element-loading-show-empty')
      instance.changeEmpty(showEmpty === 'true')
    }
  },
  unmounted(el) {
    el?.instance?.close()
  },
}

export default vLoading
