import { createLoadingComponent } from './createLoadingComponent'
import type { ILoadingOptions, ILoadingInstance, ILoadingGlobalConfig } from './loading.type'
import { addClass, getStyle, removeClass } from '@element-plus/utils/dom'
import PopupManager from '@element-plus/utils/popup-manager'
import isServer from '@element-plus/utils/isServer'

const defaults: ILoadingOptions = {
  parent: null,
  background: '',
  spinner: false,
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: '',
}

const globalLoadingOption: ILoadingGlobalConfig = {
  fullscreenLoading: null,
}

const addStyle = (options: ILoadingOptions, parent: HTMLElement, instance: ILoadingInstance) => {
  const maskStyle: Partial<CSSStyleDeclaration> = {}
  if (options.fullscreen) {
    instance.originalPosition.value = getStyle(document.body, 'position')
    instance.originalOverflow.value = getStyle(document.body, 'overflow')
    maskStyle.zIndex = String(PopupManager.nextZIndex())
  } else if (options.body) {
    instance.originalPosition.value = getStyle(document.body, 'position');
    ['top', 'left'].forEach(property => {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
      maskStyle[property] = (options.target as HTMLElement).getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] -
        parseInt(getStyle(document.body, `margin-${ property }`), 10) +
        'px'
    });
    ['height', 'width'].forEach(property => {
      maskStyle[property] = (options.target as HTMLElement).getBoundingClientRect()[property] + 'px'
    })
  } else {
    instance.originalPosition.value = getStyle(parent, 'position')
  }
  Object.keys(maskStyle).forEach(property => {
    instance.$el.style[property] = maskStyle[property]
  })
}

const addClassList = (options: ILoadingOptions, parent: HTMLElement, instance: ILoadingInstance) => {
  if (instance.originalPosition.value !== 'absolute' && instance.originalPosition.value !== 'fixed') {
    addClass(parent, 'el-loading-parent--relative')
  } else {
    removeClass(parent, 'el-loading-parent--relative')
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, 'el-loading-parent--hidden')
  } else {
    removeClass(parent, 'el-loading-parent--hidden')
  }
}

const Loading = function(options: ILoadingOptions = {}): ILoadingInstance{
  if(isServer) return
  options = {
    ...defaults,
    ...options,
  }

  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target) as HTMLElement
  }
  options.target = options.target || document.body
  if (options.target !== document.body) {
    options.fullscreen = false
  } else {
    options.body = true
  }

  if (options.fullscreen && globalLoadingOption.fullscreenLoading) {
    globalLoadingOption.fullscreenLoading.close()
  }

  const parent = options.body ? document.body : options.target
  options.parent = parent

  const instance = createLoadingComponent({
    options,
    globalLoadingOption,
  })

  addStyle(options, parent, instance)
  addClassList(options, parent, instance)

  options.parent.vLoadingAddClassList = () => {
    addClassList(options, parent, instance)
  }

  parent.appendChild(instance.$el)
  if (options.fullscreen) {
    globalLoadingOption.fullscreenLoading = instance
  }
  return instance
}

export default Loading
