import { CHANGE_EVENT } from '@element-plus/utils/constants'

import type { VNode } from 'vue'

export { CHANGE_EVENT }

export type Key = string | number

export type DataItem = {
  key: Key
  label: string
  disabled: boolean
}

export type Format = {
  noChecked: string
  hasChecked: string
}

export type Props = {
  label: string
  key: string
  disabled: string
}

export type TargetOrder = 'original' | 'push' | 'unshift'

export interface TransferProps {
  data: DataItem[]
  titles: [string, string]
  buttonTexts: [string, string]
  filterPlaceholder: string
  filterMethod?: (query: string, item: DataItem) => boolean
  leftDefaultChecked: Key[]
  rightDefaultChecked: Key[]
  renderContent?: (h, option) => VNode
  modelValue: Key[]
  format: Format
  filterable: boolean
  props: Props
  targetOrder: TargetOrder
}

export interface TransferCheckedState {
  leftChecked: Key[]
  rightChecked: Key[]
}

export interface TransferPanelProps {
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

export interface TransferPanelState {
  checked: Key[]
  allChecked: boolean
  query: string
  inputHover: boolean
  checkChangeByUser: boolean
}
