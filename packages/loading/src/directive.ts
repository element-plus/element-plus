import { createVNode, nextTick, render } from 'vue'
import { addStyle } from './index'
import isServer from '@element-plus/utils/isServer'
import { addClass, removeClass } from '../../utils/dom'
import { Options } from './index'
import loadingVue from './loading.vue'

const getOptions = (el, binding, vNode): Options => {
  const textExr = el.getAttribute('element-loading-text')
  const spinnerExr = el.getAttribute('element-loading-spinner')
  const backgroundExr = el.getAttribute('element-loading-background')
  const customClassExr = el.getAttribute('element-loading-custom-class')
  const vm = vNode.component
  return {
    target: !!binding.modifiers.fullscreen || !!binding.modifiers.body ? document.body : el,
    text: (vm && vm[textExr]) || textExr,
    spinner: (vm && vm[spinnerExr]) || spinnerExr,
    background: (vm && vm[backgroundExr]) || backgroundExr,
    customClass: (vm && vm[customClassExr]) || customClassExr,
    fullscreen: !!binding.modifiers.fullscreen,
    lock: !!binding.modifiers.lock,
    body: !!binding.modifiers.body,
  }
}

const processStyle = (options, el) => {
  addStyle(options, el.instance.props.target, el.instance)
  if (el.instance.originalPosition !== 'absolute' && el.instance.originalPosition !== 'fixed') {
    addClass(el.instance.props.target, 'el-loading-parent--relative')
  }
  if (options.fullscreen && options.lock) {
    addClass(el.instance.props.target, 'el-loading-parent--hidden')
  }
}

let id = 0

const loadingDirective = {
  mounted: function (el, binding, vNode) {
    const options = getOptions(el, binding, vNode)

    let container

    if(!el.container){
      container = document.createElement('div')
      container.className = `loading_container_directive_${id++}`
      options.onAfterLeave = function (){
        removeClass(el.instance.props.target as HTMLElement, 'el-loading-parent--relative')
        removeClass(el.instance.props.target as HTMLElement, 'el-loading-parent--hidden')
      }
    } else {
      container = el.container
    }


    const loadingVm = createVNode(loadingVue, {
      ...options,
      onAfterLeave: options.onAfterLeave,
    })

    render(loadingVm, container)

    !el.container && document.body.appendChild(container)


    el.options = options
    el.instance = loadingVm.component
    el.container = container

    if(binding.value){
      nextTick().then(() => {
        processStyle(options, el)
        el.instance.props.visible = true
      })
    }
  },

  updated: function (el, binding, vNode) {
    if(binding.value){
      nextTick().then(() => {
        const options = getOptions(el, binding, vNode)
        processStyle(options, el)
        el.instance.props.text = el.getAttribute('element-loading-text')
        el.instance.props.visible = true
      })
    } else {
      el.instance.props.visible = false
    }
  },

  unmounted: function (el){
    el.options = null
    el.instance = null
    render(null, el.container)
    document.body.removeChild(el.container)
  },
}

export default {
  install(app) {
    if (isServer) return
    app.directive('loading', loadingDirective)
  },
}

export const directive = loadingDirective
