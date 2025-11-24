// @ts-nocheck
import { isRef, ref } from 'vue'
import { hyphenate, isObject, isString } from '@element-plus/utils'
import Loading from './service'

import type { Directive, DirectiveBinding, UnwrapRef } from 'vue'
import type { LoadingOptions } from './types'
import type { LoadingInstance } from './loading'

const INSTANCE_KEY = Symbol('ElLoading')
const getAttributeName = (name: string) => {
  return `element-loading-${hyphenate(name)}`
}

export type LoadingBinding = boolean | UnwrapRef<LoadingOptions>
export interface ElementLoading extends HTMLElement {
  [INSTANCE_KEY]?: {
    instance: LoadingInstance
    options: LoadingOptions
  }
}

const createInstance = (
  el: ElementLoading,
  binding: DirectiveBinding<LoadingBinding>
) => {
  const vm = binding.instance

  const getBindingProp = <K extends keyof LoadingOptions>(
    key: K
  ): LoadingOptions[K] =>
    isObject(binding.value) ? binding.value[key] : undefined

  const resolveExpression = (key: any) => {
    const data = (isString(key) && vm?.[key]) || key
    return ref(data)
  }

  const getProp = <K extends keyof LoadingOptions>(name: K) =>
    resolveExpression(
      getBindingProp(name) || el.getAttribute(getAttributeName(name))
    )

  const fullscreen =
    getBindingProp('fullscreen') ?? binding.modifiers.fullscreen

  const options: LoadingOptions = {
    text: getProp('text'),
    svg: getProp('svg'),
    svgViewBox: getProp('svgViewBox'),
    spinner: getProp('spinner'),
    background: getProp('background'),
    customClass: getProp('customClass'),
    fullscreen,
    target: getBindingProp('target') ?? (fullscreen ? undefined : el),
    body: getBindingProp('body') ?? binding.modifiers.body,
    lock: getBindingProp('lock') ?? binding.modifiers.lock,
  }
  const instance = Loading(options)
  instance._context = vLoading._context
  el[INSTANCE_KEY] = {
    options,
    instance,
  }
}

const updateOptions = (
  originalOptions: LoadingOptions,
  newOptions: UnwrapRef<LoadingOptions>
) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key]
  }
}

const vLoading: Directive<ElementLoading, LoadingBinding> = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding)
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY]
    if (!binding.value) {
      instance?.instance.close()
      el[INSTANCE_KEY] = null
      return
    }

    if (!instance) createInstance(el, binding)
    else {
      updateOptions(
        instance.options,
        isObject(binding.value)
          ? binding.value
          : {
              text: el.getAttribute(getAttributeName('text')),
              svg: el.getAttribute(getAttributeName('svg')),
              svgViewBox: el.getAttribute(getAttributeName('svgViewBox')),
              spinner: el.getAttribute(getAttributeName('spinner')),
              background: el.getAttribute(getAttributeName('background')),
              customClass: el.getAttribute(getAttributeName('customClass')),
            }
      )
    }
  },
  unmounted(el) {
    el[INSTANCE_KEY]?.instance.close()
    el[INSTANCE_KEY] = null
  },
}

vLoading._context = null
export default vLoading
