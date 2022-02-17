import { nextTick } from 'vue'
import { isString } from '@vue/shared'
import { isClient } from '@vueuse/core'
import { addClass, getStyle, removeClass } from '@element-plus/utils'
import { useZIndex } from '@element-plus/hooks'
import { createLoadingComponent } from './loading'
import type { LoadingInstance } from './loading'
import type { LoadingOptionsResolved } from '..'
import type { LoadingOptions } from './types'
import type { CSSProperties } from 'vue'

let fullscreenInstance: LoadingInstance | undefined = undefined

export const Loading = function (
  options: LoadingOptions = {}
): LoadingInstance {
  if (!isClient) return undefined as any

  const resolved = resolveOptions(options)
  /**
   *  because if the property fullscreen in the service is false
   *  is not single，so use isService to distinguish
   */
  if (resolved.isService && fullscreenInstance) {
    //because destroySelf function remvoeElLoadingChild
    addPropsToInstance(resolved, fullscreenInstance)
    return fullscreenInstance
  }

  const instance = createLoadingComponent({
    ...resolved,
    closed: () => {
      resolved.closed?.()
      if (resolved.fullscreen) fullscreenInstance = undefined
    },
  })
  addPropsToInstance(resolved, instance)
  if (resolved.isService && fullscreenInstance == undefined) {
    fullscreenInstance = instance
  }
  return instance
}

const addPropsToInstance = (
  resolved: LoadingOptionsResolved,
  instance: LoadingInstance
) => {
  addStyle(resolved, resolved.parent, instance)
  addClassList(resolved, resolved.parent, instance)

  resolved.parent.vLoadingAddClassList = () =>
    addClassList(resolved, resolved.parent, instance)

  /**
   * add loading-number to parent.
   * because if a fullscreen loading is triggered when somewhere
   * a v-loading.body was triggered before and it's parent is
   * document.body which with a margin , the fullscreen loading's
   * destroySelf function will remove 'el-loading-parent--relative',
   * and then the position of v-loading.body will be error.
   */
  let loadingNumber: string | null =
    resolved.parent.getAttribute('loading-number')
  if (!loadingNumber) {
    loadingNumber = '1'
  } else {
    loadingNumber = `${Number.parseInt(loadingNumber) + 1}`
  }
  resolved.parent.setAttribute('loading-number', loadingNumber)

  resolved.parent.appendChild(instance.$el)

  // after instance render, then modify visible to trigger transition
  nextTick(() => (instance.visible.value = resolved.visible))
}

const resolveOptions = (options: LoadingOptions): LoadingOptionsResolved => {
  let target: HTMLElement
  if (isString(options.target)) {
    target =
      document.querySelector<HTMLElement>(options.target) ?? document.body
  } else {
    target = options.target || document.body
  }
  return {
    parent: target === document.body || options.body ? document.body : target,
    background: options.background || '',
    svg: options.svg || '',
    svgViewBox: options.svgViewBox || '',
    spinner: options.spinner || false,
    text: options.text || '',
    fullscreen: target === document.body && (options.fullscreen ?? true),
    lock: options.lock ?? false,
    customClass: options.customClass || '',
    visible: options.visible ?? true,
    target,
    isService: target === document.body && (options.isService ?? true),
  }
}

const addStyle = async (
  options: LoadingOptionsResolved,
  parent: HTMLElement,
  instance: LoadingInstance
) => {
  const { nextZIndex } = useZIndex()

  const maskStyle: CSSProperties = {}
  if (options.fullscreen) {
    instance.originalPosition.value = getStyle(document.body, 'position')
    instance.originalOverflow.value = getStyle(document.body, 'overflow')
    maskStyle.zIndex = nextZIndex()
  } else if (options.parent === document.body) {
    instance.originalPosition.value = getStyle(document.body, 'position')
    /**
     * await dom render when visible is true in init,
     * because some component's height maybe 0.
     * e.g. el-table.
     */
    await nextTick()
    for (const property of ['top', 'left']) {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
      maskStyle[property] = `${
        (options.target as HTMLElement).getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] -
        parseInt(
          getStyle(document.body, `margin-${property}` as keyof CSSProperties),
          10
        )
      }px`
    }
    for (const property of ['height', 'width']) {
      maskStyle[property] = `${
        (options.target as HTMLElement).getBoundingClientRect()[property]
      }px`
    }
  } else {
    instance.originalPosition.value = getStyle(parent, 'position')
  }
  for (const [key, value] of Object.entries(maskStyle)) {
    instance.$el.style[key] = value
  }
}

const addClassList = (
  options: LoadingOptions,
  parent: HTMLElement,
  instance: LoadingInstance
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
