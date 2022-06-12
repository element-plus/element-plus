import { getCurrentInstance } from 'vue'
import type { VNode } from 'vue'
import type { Component } from 'vue/src/types/component'

export const warn = (msg: string) => console.warn(msg)
export const Comment = undefined
export const Fragment = undefined
export const Text = undefined
export const createBlock = undefined
export const createCommentVNode = undefined
export const openBlock = undefined
export const Teleport = undefined
export const createElementVNode = undefined
export const createElementBlock = undefined
export const createTextVNode = undefined
export const createVNode = undefined
export const renderSlot = (
  slots: any,
  name: string,
  props: any = {},
  fallback?: () => any
) => {
  const vm = getCurrentInstance()!.proxy as unknown as Component
  return vm._t(name, fallback?.(), props)
}

export const isVNode = (val: unknown): val is VNode => true

export * from 'vue'
