import type { InjectionKey, Ref } from 'vue'

export const FOCUS_ON_MOUNT = 'focus-trap.focus-on-mount'
export const FOCUS_ON_UNMOUNT = 'focus-trap.focus-on-unmount'
export const FOCUS_ON_MOUNT_OPTS: EventInit = {
  cancelable: true,
  bubbles: false,
}

export const ON_MOUNT_FOCUS_EVT = 'mountOnFocus'
export const ON_UNMOUNT_FOCUS_EVT = 'unmountOnFocus'

export type FocusTrapInjectionContext = {
  focusTrapRef: Ref<HTMLElement | null>
  onKeydown: (e: KeyboardEvent) => void
}

export const FOCUS_TRAP_INJECTION_KEY: InjectionKey<FocusTrapInjectionContext> =
  Symbol('elFocusTrap')
