import type { InjectionKey, Ref } from 'vue'

export type ElDropdownInjectionContext = {
  contentRef: Ref<HTMLElement | null>
  isUsingKeyboard: Ref<boolean>
  onItemLeave: (e: PointerEvent) => void
  onItemEnter: (e: PointerEvent) => void
}

export const DROPDOWN_INJECTION_KEY: InjectionKey<ElDropdownInjectionContext> =
  Symbol('elDropdown')
