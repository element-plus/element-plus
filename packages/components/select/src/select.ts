import {
  buildProps,
  componentSize,
  definePropType,
} from '@element-plus/utils/props'
import { CircleClose } from '@element-plus/icons'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import type { Nullable } from '@element-plus/utils/types'
import type { ElInput, ElPopper, ElScrollbar } from '@element-plus/components'
import type { OptionInstance } from './option'
import type { Component, ExtractPropTypes, Ref } from 'vue'

export const selectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: undefined,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  automaticDropdown: Boolean,
  size: {
    type: String,
    values: componentSize,
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: '',
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  placeholder: {
    type: String,
  },
  defaultFirstOption: Boolean,
  reserveKeyword: Boolean,
  valueKey: {
    type: String,
    default: 'value',
  },
  collapseTags: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: true,
  },
  clearIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: CircleClose as any,
  },
  fitInputWidth: {
    type: Boolean,
    default: false,
  },
} as const)
export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectEmits = {
  [UPDATE_MODEL_EVENT]: (val: any) => val,
  [CHANGE_EVENT]: (val: any) => val,
  'remove-tag': (val: any) => val,
  'visible-change': (val: any) => val,
  clear: () => true,
  focus: (evt: Event) => evt instanceof Event,
  blur: (evt: Event) => evt instanceof Event,
}
export type SelectEmits = typeof selectEmits
export interface QueryChangeCtx {
  query: string
}
export interface SelectContext {
  props: SelectProps
  queryChange: Ref<QueryChangeCtx>
  groupQueryChange: Ref<string>
  selectWrapper: HTMLElement
  cachedOptions: Map<any, any>
  hoverIndex: number
  optionsCount: number
  filteredOptionsCount: number
  options: Map<any, any>
  optionsArray: any[]
  selected: any | any[]
  setSelected(): void
  onOptionCreate(vm: OptionInstance): void
  onOptionDestroy(key: number | string | Record<string, any> | boolean): void
  handleOptionSelect(vm: OptionInstance, byClick: boolean): void
}
export interface SelectStates {
  options: Map<any, any>
  cachedOptions: Map<any, any>
  createdLabel: Nullable<string>
  createdSelected: false
  selected: unknown[] | Record<any, any>
  inputLength: number
  inputWidth: number
  initialInputHeight: number
  optionsCount: number
  filteredOptionsCount: number
  visible: boolean
  softFocus: boolean
  selectedLabel: string
  hoverIndex: number
  query: string
  previousQuery: Nullable<string>
  inputHovering: boolean
  cachedPlaceHolder: string
  currentPlaceholder: string
  menuVisibleOnFocus: boolean
  isOnComposition: boolean
  isSilentBlur: boolean
  prefixWidth: Nullable<number>
  tagInMultiLine: boolean
}

/** TODO: when merge other refactor components, may be can remove this and import ComponentInstance from @element-plus/components */
export type PopperInstance = InstanceType<typeof ElPopper>

export type ScrollbarInstance = InstanceType<typeof ElScrollbar>

export type InputInstance = InstanceType<typeof ElInput>
