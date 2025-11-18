import type {
  ComputedRef,
  InjectionKey,
  Ref,
  Slots,
  UnwrapRef,
  VNode,
} from 'vue'
import type { TabsProps } from './tabs'
import type { TabPaneProps } from './tab-pane'
import type { TabNavInstance } from './tab-nav'

export type TabPaneName = string | number

export type TabsPaneContext = UnwrapRef<{
  uid: number
  getVnode: () => VNode
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
  unregisterPane: (pane: TabsPaneContext) => void
  nav$: Ref<TabNavInstance | undefined>
}

export const tabsRootContextKey: InjectionKey<TabsRootContext> =
  Symbol('tabsRootContextKey')
