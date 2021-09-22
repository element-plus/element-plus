import { nextTick } from 'vue'
import { hasOwn } from '@vue/shared'
import { addClass, getStyle, removeClass } from '@element-plus/utils/dom'
import PopupManager from '@element-plus/utils/popup-manager'
import isServer from '@element-plus/utils/isServer'
import { createLoadingComponent } from './createLoadingComponent'

import type { CSSProperties } from 'vue'

import type {
  ILoadingGlobalConfig,
  ILoadingInstance,
  ILoadingOptions,
} from './loading.type'

const defaults: ILoadingOptions = {
  parent: null,
  background: '',
  svg: null,
  svgViewBox: null,
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

const addStyle = async (
  options: ILoadingOptions,
  parent: HTMLElement,
  instance: ILoadingInstance
) => {
  const maskStyle: Partial<CSSProperties> = {}
  if (options.fullscreen) {
    instance.originalPosition.value = getStyle(document.body, 'position')
    instance.originalOverflow.value = getStyle(document.body, 'overflow')
    maskStyle.zIndex = PopupManager.nextZIndex()
  } else if (options.body) {
    instance.originalPosition.value = getStyle(document.body, 'position')
    /**
     * await dom render when visible is true in init,
     * because some component's height maybe 0.
     * e.g. el-table.
     */
    await nextTick()
    ;['top', 'left'].forEach((property) => {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
      maskStyle[property] = `${
        (options.target as HTMLElement).getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] -
        parseInt(getStyle(document.body, `margin-${property}`), 10)
      }px`
    })
    ;['height', 'width'].forEach((property) => {
      maskStyle[property] = `${
        (options.target as HTMLElement).getBoundingClientRect()[property]
      }px`
    })
  } else {
    instance.originalPosition.value = getStyle(parent, 'position')
  }
  Object.keys(maskStyle).forEach((property) => {
    instance.$el.style[property] = maskStyle[property]
  })
}

const addClassList = (
  options: ILoadingOptions,
  parent: HTMLElement,
  instance: ILoadingInstance
) => {
  if (
    instance.originalPosition.value !== 'absolute' &&
    instance.originalPosition.value !== 'fixed'
  ) {
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

const Loading = function (options: ILoadingOptions = {}): ILoadingInstance {
  if (isServer) return
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

  /**
   * add loading-number to parent.
   * because if a fullscreen loading is triggered when somewhere
   * a v-loading.body was triggered before and it's parent is
   * document.body which with a margin , the fullscreen loading's
   * destroySelf function will remove 'el-loading-parent--relative',
   * and then the position of v-loading.body will be error.
   */
  let loadingNumber: number | string = parent.getAttribute('loading-number')
  if (!loadingNumber) {
    loadingNumber = 1
  } else {
    loadingNumber = Number.parseInt(loadingNumber) + 1
  }
  parent.setAttribute('loading-number', loadingNumber.toString())

  parent.appendChild(instance.$el)

  // after instance render, then modify visible to trigger transition
  nextTick().then(() => {
    instance.visible.value = hasOwn(options, 'visible') ? options.visible : true
  })

  if (options.fullscreen) {
    globalLoadingOption.fullscreenLoading = instance
  }
  return instance
}

export default Loading
