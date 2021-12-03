import type { InjectionKey, Ref } from 'vue'

export type Measurable = {
  getBoundingClientRect: () => DOMRect
}

export type ElPopperInjectionContext = {
  triggerRef: Ref<Measurable | null>
}

export type ElPopperContentInjectionContext = {
  arrowRef: Ref<HTMLElement | null>
  arrowOffset: Ref<number | undefined>
}

export const POPPER_INJECTION_KEY: InjectionKey<ElPopperInjectionContext> =
  Symbol('elPopper')

export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<ElPopperContentInjectionContext> =
  Symbol('elPopperContent')
