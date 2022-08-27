// @ts-nocheck
import { isRef, ref } from 'vue'
import { hyphenate, isObject, isString } from '@vue/shared'
import { Loading } from './service'
import type { Directive, DirectiveBinding, UnwrapRef } from 'vue'
import type { LoadingOptions } from './types'
import type { LoadingInstance } from './loading'

const INSTANCE_KEY = Symbol('ElLoading')

export type LoadingBinding = boolean | UnwrapRef<LoadingOptions>
export interface ElementLoading extends HTMLElement {
  [INSTANCE_KEY]?: {
    instance: LoadingInstance
    options: LoadingOptions
  }
}

const resolveExpression = (key: any, vm: any) => {
  const data = (isString(key) && vm?.[key]) || key
  if (data) return ref(data)
  else return data
}

const getBindingProp = <K extends keyof LoadingOptions>(
  key: K,
  binding: DirectiveBinding<LoadingBinding>
): LoadingOptions[K] =>
  isObject(binding.value) ? binding.value[key] : undefined

const getProp = <K extends keyof LoadingOptions>(name: K, ctx) =>
  resolveExpression(
    getBindingProp(name, ctx.binding) ||
      ctx.el.getAttribute(`element-loading-${hyphenate(name)}`, ctx.vm)
  )

const createInstance = (
  el: ElementLoading,
  binding: DirectiveBinding<LoadingBinding>
) => {
  const vm = binding.instance
  const ctx = {
    el,
    binding,
    vm,
  }

  const fullscreen =
    getBindingProp('fullscreen', binding) ?? binding.modifiers.fullscreen

  const options: LoadingOptions = {
    text: getProp('text', ctx),
    svg: getProp('svg', ctx),
    svgViewBox: getProp('svgViewBox', ctx),
    spinner: getProp('spinner', ctx),
    background: getProp('background', ctx),
    customClass: getProp('customClass', ctx),
    fullscreen,
    target: getBindingProp('target', binding) ?? (fullscreen ? undefined : el),
    body: getBindingProp('body', binding) ?? binding.modifiers.body,
    lock: getBindingProp('lock', binding) ?? binding.modifiers.lock,
  }
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options),
  }
}

const updateOptions = (
  newOptions: UnwrapRef<LoadingOptions>,
  originalOptions: LoadingOptions
) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key]
  }
}

const updateDirectiveAttr = (el, binding, originalOptions: LoadingOptions) => {
  const ctx = {
    el,
  }
  const getProp = <K extends keyof LoadingOptions>(name: K) =>
    resolveExpression(el.getAttribute(`element-loading-${hyphenate(name)}`))

  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = getProp(key, ctx).value
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
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding)
      } else if (binding.value && binding.oldValue) {
        if (isObject(binding.value))
          updateOptions(binding.value, instance!.options)
      } else {
        instance?.instance.close()
      }
    } else {
      if (!isObject(binding.value) && !isObject(binding.oldValue)) {
        updateDirectiveAttr(el, binding, instance!.options)
      } else {
        updateOptions(binding.value, instance!.options)
      }
    }
  },
  unmounted(el) {
    el[INSTANCE_KEY]?.instance.close()
  },
}
