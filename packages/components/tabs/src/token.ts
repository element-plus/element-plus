import type { TabPaneProps } from './tab-pane'
import type { TabsProps } from './tabs'
import type { ComponentInternalInstance, ComputedRef, Ref } from 'vue'

export type BeforeLeave = (
  newTabName: string,
  oldTabName: string
) => void | Promise<void> | boolean

export type ITabType = 'card' | 'border-card' | ''
export type ITabPosition = 'top' | 'right' | 'bottom' | 'left'
export type UpdatePaneStateCallback = (pane: Pane) => void

export interface RootTabs {
  props: TabsProps
  currentName: Ref<string>
}

export interface Pane {
  uid: number
  instance: ComponentInternalInstance
  props: TabPaneProps
  paneName: ComputedRef<string>
  active: ComputedRef<boolean>
  index: Ref<string>
  isClosable: ComputedRef<boolean>
}
