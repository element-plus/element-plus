import { PopperProps } from '@element-plus/element-plus'
import type { ComputedRef, InjectionKey, Ref } from 'vue'

export type ElDropdownInjectionContext = {
  contentRef: Ref<HTMLElement | undefined>
  role: ComputedRef<PopperProps['role']>
  triggerId: ComputedRef<string>
  isUsingKeyboard: Ref<boolean>
  onItemLeave: (e: PointerEvent) => void
  onItemEnter: (e: PointerEvent) => void
}

export const DROPDOWN_INJECTION_KEY: InjectionKey<ElDropdownInjectionContext> =
  Symbol('elDropdown')
