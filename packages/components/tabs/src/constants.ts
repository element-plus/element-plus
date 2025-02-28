import type { ComputedRef, InjectionKey, Ref, Slots, UnwrapRef } from 'vue'
import type { TabsProps } from './tabs'
import type { TabPaneProps } from './tab-pane'

export type TabPaneName = string | number

export type TabsPaneContext = UnwrapRef<{
  uid: number
  slots: Slots
  props: TabPaneProps
  paneName: ComputedRef<TabPaneName | undefined>
  active: ComputedRef<boolean>
  index: Ref<string | undefined>
  isClosable: ComputedRef<boolean>
  isFocusInsidePane: () => boolean | undefined
}>

export interface TabsRootContext {
  props: TabsProps
  currentName: Ref<TabPaneName>
  registerPane: (pane: TabsPaneContext) => void
  sortPane: (pane: TabsPaneContext) => void
  unregisterPane: (uid: number) => void
}

export const tabsRootContextKey: InjectionKey<TabsRootContext> =
  Symbol('tabsRootContextKey')
