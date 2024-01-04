import type { ExtractPropTypes, InjectionKey, Ref } from 'vue'
import type { SelectProps } from './select'

interface SelectGroupContext {
  disabled: boolean
}

export interface QueryChangeCtx {
  query: string
}

export interface SelectContext {
  props: ExtractPropTypes<typeof SelectProps>
  states: any
  expanded: boolean
  queryChange: Ref<QueryChangeCtx>
  groupQueryChange: Ref<string>
  selectRef: HTMLElement
  optionsArray: any[]
  setSelected(): void
  onOptionCreate(vm: SelectOptionProxy): void
  onOptionDestroy(key: number | string | Record<string, any>): void
  handleOptionSelect(vm: unknown): void
}

// For individual build sharing injection key, we had to make `Symbol` to string
export const selectGroupKey: InjectionKey<SelectGroupContext> =
  Symbol('ElSelectGroup')

export const selectKey: InjectionKey<SelectContext> = Symbol('ElSelect')

export interface SelectOptionProxy {
  value: string | number | Record<string, string>
  label: string | number
  created: boolean
  disabled: boolean
  currentLabel: string
  itemSelected: boolean
  isDisabled: boolean
  select: SelectContext
  hoverItem: () => void
  visible: boolean
  hover: boolean
  selectOptionClick: () => void
}

export type ISelectProps = ExtractPropTypes<typeof SelectProps>
