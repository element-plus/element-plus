import type { InjectionKey } from 'vue'
import type { Emitter } from 'mitt'

interface SelectGroupContext {
  disabled: boolean
}

export interface SelectContext {
  props: {
    multiple?: boolean
    multipleLimit?: number
    valueKey?: string
    modelValue?: string | number | unknown[]
    popperClass?: string
    remote?: boolean
  }
  selectWrapper: HTMLElement
  cachedOptions: any[]
  hoverIndex: number
  optionsCount: number
  filteredOptionsCount: number
  options: any[]
  selected: any | any[]
  selectEmitter: Emitter
  setSelected(): void
  onOptionDestroy(i: number)
  handleOptionSelect(vm: unknown, byClick: boolean)
}

export const selectGroupKey: InjectionKey<SelectGroupContext> = Symbol('SelectGroup')

export const selectKey: InjectionKey<SelectContext> = Symbol('Select')

export const selectEvents = {
  queryChange: 'elOptionQueryChange',
  groupQueryChange: 'elOptionGroupQueryChange',
}
