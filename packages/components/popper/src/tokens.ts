import type { InjectionKey, Ref } from 'vue'

export type Measurable = {
  getBoundingClientRect: () => DOMRect
}

export type ElPopperInjectionContext = {
  anchor: Ref<Measurable>
}

export const POPPER_INJECTION_KEY: InjectionKey<ElPopperInjectionContext> =
  Symbol('elPopper')
