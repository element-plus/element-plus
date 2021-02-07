import type { ComponentPublicInstance, InjectionKey } from 'vue'
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
  onOptionCreate(vm: ComponentPublicInstance): void
  onOptionDestroy(i: number): void
  handleOptionSelect(vm: unknown, byClick: boolean): void
}

// For individual build sharing injection key, we had to make `Symbol` to string
export const selectGroupKey = 'ElSelectGroup' as unknown as InjectionKey<SelectGroupContext>

export const selectKey = 'ElSelect' as unknown as InjectionKey<SelectContext>

export const selectEvents = {
  queryChange: 'elOptionQueryChange',
  groupQueryChange: 'elOptionGroupQueryChange',
}

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
