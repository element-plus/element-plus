import type { InjectionKey, Ref } from 'vue'

interface SelectGroupContext {
  disabled: boolean
}

export interface QueryChangeCtx {
  query: string
}

export interface SelectContext {
  props: {
    multiple: boolean
    value: unknown[]
    multipleLimit: number
    valueKey: string
    modelValue: unknown[]
    popperClass: string
  }
  queryChange: Ref<QueryChangeCtx>
  groupQueryChange: Ref<string>
  selectWrapper: HTMLElement
  cachedOptions: any[]
  selected: any | any[]
  multiple: boolean
  hoverIndex: number
  setSelected(): void
  valueKey: string
  remote: boolean
  optionsCount: number
  filteredOptionsCount: number
  options: unknown[]
  onOptionDestroy(i: number)
  handleOptionSelect(vm: unknown, byClick: boolean)
}

export const selectGroupKey: InjectionKey<SelectGroupContext> = Symbol('SelectGroup')

export const selectKey: InjectionKey<SelectContext> = Symbol('Select')
