import type { ComputedRef, InjectionKey, Ref, ToRefs } from 'vue'
import type { PopperProps } from '@element-plus/components/popper'
import type { DropdownProps } from './dropdown'

export type ElDropdownInjectionContext = {
  contentRef: Ref<HTMLElement | undefined>
  dropdownSubMenuRef?: Ref<HTMLElement | undefined>
  /** @deprecated This prop has been moved to `DROPDOWN_INSTANCE_INJECTION_KEY` */
  role?: Ref<PopperProps['role']>
  triggerId: Ref<string> | ComputedRef<string>
  isUsingKeyboard: Ref<boolean>
  path: ComputedRef<string[]>
  onItemLeave: (e: PointerEvent) => void
  onItemEnter: (e: PointerEvent) => void
  handleClose: (e: Event) => void
}

export interface IElDropdownInstance extends ToRefs<DropdownProps> {
  dropdownSize: ComputedRef<string>
  handleClick: () => void
  commandHandler: (...arg: any[]) => void
  addPopperContent: (el?: HTMLElement) => void
  removePopperContent: (el?: HTMLElement) => void
}

export const DROPDOWN_INJECTION_KEY: InjectionKey<ElDropdownInjectionContext> =
  Symbol('elDropdown')

export const DROPDOWN_INSTANCE_INJECTION_KEY: InjectionKey<IElDropdownInstance> =
  Symbol('elDropdownRoot')
