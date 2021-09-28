import type { ComponentInternalInstance, ComputedRef, Ref } from 'vue'

export type BeforeLeave = (
  newTabName: string,
  oldTabName: string
) => void | Promise<void> | boolean

export type ITabType = 'card' | 'border-card' | ''
export type ITabPosition = 'top' | 'right' | 'bottom' | 'left'
export type UpdatePaneStateCallback = (pane: Pane) => void

export interface IElTabsProps {
  type: ITabType
  activeName: string
  closable: boolean
  addable: boolean
  modelValue: string
  editable: boolean
  tabPosition: ITabPosition
  beforeLeave: BeforeLeave
  stretch: boolean
}

export interface RootTabs {
  props: IElTabsProps
  currentName: Ref<string>
}

export interface IElPaneProps {
  label: string
  name: string
  closable: boolean
  disabled: boolean
  lazy: boolean
}

export interface Pane {
  uid: number
  instance: ComponentInternalInstance
  props: IElPaneProps
  paneName: ComputedRef<string>
  active: ComputedRef<boolean>
  index: Ref<string>
  isClosable: ComputedRef<boolean>
}
