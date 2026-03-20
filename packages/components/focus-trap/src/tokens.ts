import type { InjectionKey, Ref } from 'vue'

export const FOCUS_AFTER_TRAPPED = 'focus-trap.focus-after-trapped'
export const FOCUS_AFTER_RELEASED = 'focus-trap.focus-after-released'
export const FOCUSOUT_PREVENTED = 'focus-trap.focusout-prevented'
export const FOCUS_AFTER_TRAPPED_OPTS: EventInit = {
  cancelable: true,
  bubbles: false,
}
export const FOCUSOUT_PREVENTED_OPTS: EventInit = {
  cancelable: true,
  bubbles: false,
}

export const ON_TRAP_FOCUS_EVT = 'focusAfterTrapped'
export const ON_RELEASE_FOCUS_EVT = 'focusAfterReleased'

export type FocusTrapInjectionContext = {
  focusTrapRef: Ref<HTMLElement | undefined>
  onKeydown: (e: KeyboardEvent) => void
}

export const FOCUS_TRAP_INJECTION_KEY: InjectionKey<FocusTrapInjectionContext> =
  Symbol('elFocusTrap')
