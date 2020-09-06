import { createVNode, nextTick, render } from 'vue'
import loadingVue from './loading.vue'
import { addClass, getStyle, removeClass } from '@element-plus/utils/dom'
import PopupManager from '@element-plus/utils/popup-manager'
import isServer from '@element-plus/utils/isServer'

export type Options = {
  target?: Nullable<string | HTMLElement>
  body?: boolean
  fullscreen?: boolean
  lock?: boolean
  text?: Nullable<string>
  spinner?: Nullable<string>
  background?: Nullable<string>
  customClass?: Nullable<string>
  visible?: boolean
  onAfterLeave?: () => void
}

let fullscreenLoading = null

let id = 0

let containerList = []

const loadingMap = new Map()

const Loading = (options: Options = {}) => {
  if (isServer) return
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target) as HTMLElement
  }
  options.target = options.target || document.body
  if (options.target !== document.body) {
    options.fullscreen = false
  } else {
    options.body = true
  }
  if (options.fullscreen && fullscreenLoading) {
    fullscreenLoading.props.visible = true
  }
  if(loadingMap.has(options.target)) return loadingMap.get(options.target)

  const parent = options.body ? document.body : options.target

  const index = containerList.findIndex((item: HTMLElement) => item.classList.contains('loading_container_empty'))
  let container
  if(index !== -1){
    container = containerList[index]
    containerList = containerList.splice(index, 1)
  }else {
    container = document.createElement('div')
  }

  container.className = `loading_container_${id++}`

  options.onAfterLeave = function (){
    removeClass(options.target as HTMLElement, 'el-loading-parent--relative')
    removeClass(options.target as HTMLElement, 'el-loading-parent--hidden')
    if(!options.fullscreen) render(null, container)
    container.className = 'loading_container_empty'
    containerList.push(container)
    --id
    loadingMap.delete(options.target)
  }

  const vm = createVNode(loadingVue, {
    ...options,
    onAfterLeave: options.onAfterLeave,
  })

  render(vm, container)
  loadingMap.set(options.target, vm.component)
  document.body.appendChild(container)

  const instance = vm.component

  addStyle(options, parent, instance)
  if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
    addClass(parent, 'el-loading-parent--relative')
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, 'el-loading-parent--hidden')
  }

  nextTick().then(() => {
    instance.props.visible = true
  })

  if (options.fullscreen) {
    fullscreenLoading = instance
  }

  instance.close = () => {
    instance.props.visible = false
  }
  return instance
}

export const addStyle = (options, parent, instance) => {
  const maskStyle: Partial<CSSStyleDeclaration> = {}
  if (options.fullscreen) {
    instance.originalPosition = getStyle(document.body, 'position')
    instance.originalOverflow = getStyle(document.body, 'overflow')
    maskStyle.zIndex = PopupManager.nextZIndex().toString()
  } else if (options.body) {
    instance.originalPosition = getStyle(document.body, 'position');
    ['top', 'left'].forEach(property => {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
      maskStyle[property] = options.target.getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] +
        'px'
    });
    ['height', 'width'].forEach(property => {
      maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px'
    })
  } else {
    instance.originalPosition = getStyle(parent, 'position')
  }
  Object.keys(maskStyle).forEach(property => {
    if(!instance.vnode.el.style) instance.vnode.el.style = {}
    instance.vnode.el.style[property] = maskStyle[property]
  })
}



export default Loading
