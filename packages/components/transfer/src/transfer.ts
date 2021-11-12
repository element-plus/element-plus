import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { buildProps, definePropType } from '@element-plus/utils/props'
import {
  LEFT_CHECK_CHANGE_EVENT,
  RIGHT_CHECK_CHANGE_EVENT,
} from './useCheckedChange'
import type { VNode, ExtractPropTypes } from 'vue'

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

export const transferProps = buildProps({
  data: {
    type: definePropType<DataItem[]>(Array),
    default: () => [],
  },
  titles: {
    type: definePropType<any>(Array),
    default: () => [],
  },
  buttonTexts: {
    type: definePropType<any>(Array),
    default: () => [],
  },
  filterPlaceholder: {
    type: String,
    default: '',
  },
  filterMethod: {
    type: definePropType<(query: string, item: DataItem) => boolean>(Function),
  },
  leftDefaultChecked: {
    type: definePropType<Key[]>(Array),
    default: () => [],
  },
  rightDefaultChecked: {
    type: definePropType<Key[]>(Array),
    default: () => [],
  },
  renderContent: {
    type: definePropType<(h, option) => VNode>(Function),
  },
  modelValue: {
    type: definePropType<Key[]>(Array),
    default: () => [],
  },
  format: {
    type: definePropType<Format>(Object),
    default: () => ({
      noChecked: '',
      hasChecked: '',
    }),
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  props: {
    type: definePropType<Props>(Object),
    default: () => ({
      label: 'label',
      key: 'key',
      disabled: 'disabled',
    }),
  },
  targetOrder: {
    type: definePropType<TargetOrder>(String),
    default: 'original',
    values: ['original', 'push', 'unshift'],
  },
} as const)

export type TransferProps = ExtractPropTypes<typeof transferProps>

export const transferEmits = {
  [UPDATE_MODEL_EVENT]: (val: any) => val,
  [CHANGE_EVENT]: (val: any) => val,
  [LEFT_CHECK_CHANGE_EVENT]: (val: any) => val,
  [RIGHT_CHECK_CHANGE_EVENT]: (val: any) => val,
}

export type TransferEmits = typeof transferEmits

export interface TransferCheckedState {
  leftChecked: Key[]
  rightChecked: Key[]
}
