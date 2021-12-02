import type { InjectionKey } from 'vue'
import type { UnwrapNestedRefs } from '@vue/reactivity'
import type { ElRovingFocusGroupProps } from './roving-focus-group'

export type RovingGroupInjectionContext = UnwrapNestedRefs<{
  currentTabbedId: string | null
  onItemFocus: (id: string) => void
  onItemShiftTab: () => void
  loop: ElRovingFocusGroupProps['loop']
  dir: ElRovingFocusGroupProps['dir']
  orientation: ElRovingFocusGroupProps['orientation']
}>

export const ROVING_FOCUS_GROUP_INJECTION_KEY: InjectionKey<RovingGroupInjectionContext> =
  Symbol('elRovingFocusGroup')
