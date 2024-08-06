// @ts-nocheck
import { isRef, ref } from 'vue'
import { hyphenate, isObject, isString } from '@vue/shared'
import { fromPairs } from 'lodash'
import { Loading } from './service'
import type { Directive, DirectiveBinding, UnwrapRef } from 'vue'
import type { LoadingOptions } from './types'
import type { LoadingInstance } from './loading'

const INSTANCE_KEY = Symbol('ElLoading')
const attributeKeys = [
  'text',
  'svg',
  'svgViewBox',
  'spinner',
  'background',
  'customClass',
]

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
    if (data) return ref(data)
    else return data
  }
  const getOwnAttribute = (name) => {
    return el.getAttribute(`element-loading-${hyphenate(name)}`)
  }
  const getProp = <K extends keyof LoadingOptions>(name: K) =>
    resolveExpression(getBindingProp(name) || getOwnAttribute(name))

  const fullscreen =
    getBindingProp('fullscreen') ?? binding.modifiers.fullscreen

  const options: LoadingOptions = {
    ...fromPairs(attributeKeys.map((key) => [key, getProp(key)])),
    fullscreen,
    target: getBindingProp('target') ?? (fullscreen ? undefined : el),
    body: getBindingProp('body') ?? binding.modifiers.body,
    lock: getBindingProp('lock') ?? binding.modifiers.lock,
  }
  el[INSTANCE_KEY] = {
    getOwnAttribute,
    options,
    instance: Loading(options),
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

export const vLoading: Directive<ElementLoading, LoadingBinding> = {
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
      const getOwnAttribute = instance.getOwnAttribute
      updateOptions(
        instance.options,
        isObject(binding.value)
          ? binding.value
          : fromPairs(attributeKeys.map((key) => [key, getOwnAttribute(key)]))
      )
    }
  },
  unmounted(el) {
    el[INSTANCE_KEY]?.instance.close()
    el[INSTANCE_KEY] = null
  },
}
