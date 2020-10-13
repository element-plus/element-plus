import type { InjectionKey } from 'vue'
import type { Emitter } from 'mitt'

interface SelectGroupContext {
  disabled: boolean
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
  selectEmitter: Emitter
  onOptionDestroy(i: number)
  handleOptionSelect(vm: unknown, byClick: boolean)
}

export const selectGroupKey: InjectionKey<SelectGroupContext> = Symbol('SelectGroup')

export const selectKey: InjectionKey<SelectContext> = Symbol('Select')

export const selectEvents = {
  queryChange: 'elOptionQueryChange',
  groupQueryChange: 'elOptionGroupQueryChange',
}
