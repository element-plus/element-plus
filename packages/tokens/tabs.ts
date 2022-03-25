import type { TabPaneProps, TabsProps } from '@element-plus/components/tabs'
import type {
  ComponentInternalInstance,
  ComputedRef,
  InjectionKey,
  Ref,
  ShallowReactive,
  UnwrapRef,
} from 'vue'

export type TabsPaneContext = UnwrapRef<{
  uid: number
  instance: ShallowReactive<ComponentInternalInstance>
  props: TabPaneProps
  paneName: ComputedRef<string | number | undefined>
  active: ComputedRef<boolean>
  index: Ref<string | undefined>
  isClosable: ComputedRef<boolean>
}>

export interface TabsRootContext {
  props: TabsProps
  currentName: Ref<string | number>
  updatePaneState: (pane: TabsPaneContext) => void
}

export const tabsRootContextKey: InjectionKey<TabsRootContext> =
  Symbol('tabsRootContextKey')
