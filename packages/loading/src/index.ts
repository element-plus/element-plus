import { createApp, ComponentPublicInstance } from 'vue'
import { createLoadingComponent } from './loading'
import { addClass, getStyle, removeClass } from '@element-plus/utils/dom'
import PopupManager from '@element-plus/utils/popup-manager'
import isServer from '@element-plus/utils/isServer'

interface loadingInstance extends ComponentPublicInstance{
  originalPosition: string
  originalOverflow: string
  close(): void
}

interface loadingDefaultOptions {
  parent?: Nullable<HTMLElement>
  background?: string
  spinner?: boolean | string
  text?: string
  fullscreen?: boolean
  body?: boolean
  lock?: boolean
  customClass?: string
  visible?: boolean
  target?: string | HTMLElement
}

interface globalLoadingOptionType {
  fullscreenLoading: loadingInstance
}

const defaults: loadingDefaultOptions = {
  parent: null,
  background: '',
  spinner: false,
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: '',
}

const globalLoadingOption: globalLoadingOptionType = {
  fullscreenLoading: null,
}

const addStyle = (options: loadingDefaultOptions, parent: Nullable<HTMLElement>, instance: loadingInstance) => {
  const maskStyle: Partial<CSSStyleDeclaration> = {}
  if (options.fullscreen) {
    instance.originalPosition = getStyle(document.body, 'position')
    instance.originalOverflow = getStyle(document.body, 'overflow')
    maskStyle.zIndex = String(PopupManager.nextZIndex())
  } else if (options.body) {
    instance.originalPosition = getStyle(document.body, 'position');
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
    instance.originalPosition = getStyle(parent, 'position')
  }
  Object.keys(maskStyle).forEach(property => {
    instance.$el.style[property] = maskStyle[property]
  })
}

const addClassList = (options: loadingDefaultOptions, parent: Nullable<HTMLElement>, instance: loadingInstance) => {
  if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
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

const Loading = function(options: loadingDefaultOptions = {}): loadingInstance{
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

  const instance = createApp(createLoadingComponent({
    options,
    globalLoadingOption,
  })).mount(document.createElement('div')) as loadingInstance

  addStyle(options, parent, instance)
  addClassList(options, parent, instance);

  (parent as any).vLoadingAddClassList = () => {
    addClassList(options, parent, instance)
  }

  parent.appendChild(instance.$el)
  if (options.fullscreen) {
    globalLoadingOption.fullscreenLoading = instance
  }
  return instance
}

export default Loading
