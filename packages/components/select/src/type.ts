import type {
  ComponentInternalInstance,
  ComponentPublicInstance,
  ComputedRef,
  ExtractPropTypes,
  Ref,
} from 'vue'
import type { EmitFn } from '@element-plus/utils'
import type { SelectProps, selectEmits } from './select'
import type { optionProps } from './option'

export { SelectProps }
export type SelectEmitFn = EmitFn<typeof selectEmits>
export interface SelectGroupContext {
  disabled: boolean
}
export interface SelectContext {
  props: SelectProps
  states: SelectStates
  selectRef: HTMLElement | undefined
  optionsArray: OptionPublicInstance[]
  setSelected(): void
  onOptionCreate(vm: OptionPublicInstance): void
  onOptionDestroy(key: OptionValue, vm: OptionPublicInstance): void
  handleOptionSelect(vm: OptionPublicInstance): void
}
export type SelectStates = {
  inputValue: string
  options: Map<OptionValue, OptionPublicInstance>
  cachedOptions: Map<OptionValue, OptionPublicInstance>
  optionValues: OptionValue[]
  selected: OptionBasic[]
  hoveringIndex: number
  inputHovering: boolean
  selectionWidth: number
  calculatorWidth: number
  collapseItemWidth: number
  previousQuery: string | null
  selectedLabel: string
  menuVisibleOnFocus: boolean
  isBeforeHide: boolean
}
export type OptionProps = ExtractPropTypes<typeof optionProps>
export interface OptionStates {
  index: number
  groupDisabled: boolean
  visible: boolean
  hover: boolean
}
export interface OptionExposed {
  ns: unknown
  id: unknown
  containerKls: unknown
  currentLabel: ComputedRef<string | number | boolean>
  itemSelected: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  visible: Ref<boolean>
  hover: Ref<boolean>
  states: OptionStates
  select: SelectContext
  hoverItem: () => void
  updateOption: (query: string) => void
  selectOptionClick: () => void
}
export type OptionPublicInstance = ComponentPublicInstance<
  OptionProps,
  OptionExposed
>
export type OptionInternalInstance = ComponentInternalInstance & {
  proxy: OptionPublicInstance
}
export type OptionValue = OptionProps['value']
export type OptionBasic = {
  value: OptionValue
  currentLabel: OptionPublicInstance['currentLabel']
  isDisabled?: OptionPublicInstance['isDisabled']
}
