import type {
  ComponentInternalInstance,
  ComponentPublicInstance,
  ComputedRef,
  ExtractPropTypes,
  Ref,
  UnwrapNestedRefs,
} from 'vue'
import type { ScrollbarInstance } from '@element-plus/components/scrollbar'
import type { Translator } from '@element-plus/hooks/use-locale'
import type { UseNamespaceReturn } from '@element-plus/hooks/use-namespace'
import type { SelectProps } from './select'
import type { optionProps } from './option'

export interface SelectGroupContext {
  disabled: boolean
}

export interface SelectContext extends FlatSelectContext {
  selectRef?: HTMLElement
}

export interface FlatSelectContext {
  props: SelectProps
  states: SelectStates
  t: Translator
  contentId: string
  nsSelect: UnwrapNestedRefs<UseNamespaceReturn>
  filteredOptionsCount: number
  scrollToOption: (
    option:
      | OptionPublicInstance
      | OptionPublicInstance[]
      | SelectStates['selected']
  ) => void
  hasModelValue: boolean
  updateOptions: () => void
  showNewOption: boolean
  emptyText: string | null
  selectOption: () => void
  getValueKey: (
    item: OptionPublicInstance | SelectStates['selected'][number]
  ) => any
  popupScroll: (data: { scrollTop: number; scrollLeft: number }) => void
  scrollbarRef: ScrollbarInstance | undefined
  menuRef: HTMLElement | undefined
  handleQueryChange: (val: string) => void
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
  select: FlatSelectContext
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
