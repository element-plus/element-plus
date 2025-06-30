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

export type TabsPaneContext = UnwrapRef<{
  uid: number
  getVnode: () => VNode
  slots: Slots
  props: TabPaneProps
  paneName: ComputedRef<string | number | undefined>
  active: ComputedRef<boolean>
  index: Ref<string | undefined>
  isClosable: ComputedRef<boolean>
}>

export interface TabsRootContext {
  props: TabsProps
  currentName: Ref<string | number>
  registerPane: (pane: TabsPaneContext) => void
  unregisterPane: (pane: TabsPaneContext) => void
}

export const tabsRootContextKey: InjectionKey<TabsRootContext> =
  Symbol('tabsRootContextKey')
