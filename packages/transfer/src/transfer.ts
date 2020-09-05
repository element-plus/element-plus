import { VNode } from 'vue'

export declare type Key = string | number

export declare type DataItem = {
  key: Key
  label: string
  disabled: boolean
}

export declare type Format = {
  noChecked: string
  hasChecked: string
}

export declare type Props = {
  label: string
  key: string
  disabled: string
}

export declare interface TransferProps {
  data: DataItem[]
  titles: [string, string]
  buttonTexts: [string, string]
  filterPlaceholder: string
  filterMethod: (query: string, item: DataItem) => boolean
  leftDefaultChecked: Key[]
  rightDefaultChecked: Key[]
  renderContent: (h, option) => VNode
  modelValue: Key[]
  format: Format
  filterable: boolean
  props: Props
  targetOrder: 'original' | 'push' | 'unshift'
}

export declare interface TransferCheckedState {
  leftChecked: Key[]
  rightChecked: Key[]
}

export declare interface TransferPanelProps {
  data: DataItem[]
  optionRender: ({ option: VNode }) => VNode
  placeholder: string
  title: string
  filterable: boolean
  format: Format
  filterMethod: (query: string, item: DataItem) => boolean
  defaultChecked: Key[]
  props: Props
}

export declare interface TransferPanelState {
  checked: Key[]
  allChecked: boolean
  query: string
  inputHover: boolean
  checkChangeByUser: boolean
}
