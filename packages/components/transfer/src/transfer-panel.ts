import { buildProps, definePropType } from '@element-plus/utils'
import { transferCheckedChangeFn, transferProps } from './transfer'

import type { ComponentInstance, ExtractPublicPropTypes, VNode } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type {
  TransferDataItem,
  TransferDirection,
  TransferFilterMethod,
  TransferFormat,
  TransferKey,
  TransferPropsAlias,
} from './transfer'
import type TransferPanel from './transfer-panel.vue'

export interface TransferPanelState {
  checked: TransferKey[]
  allChecked: boolean
  query: string
  checkChangeByUser: boolean
}

export const CHECKED_CHANGE_EVENT = 'checked-change'

export interface TransferPanelProps<
  T extends TransferDataItem = TransferDataItem,
> {
  data?: T[]
  direction?: TransferDirection
  optionRender?: (option: T) => VNode | VNode[]
  placeholder?: string
  title?: string
  filterable?: boolean
  format?: TransferFormat
  filterMethod?: TransferFilterMethod<T>
  defaultChecked?: TransferKey[]
  props?: TransferPropsAlias
  virtualScroll?: boolean
  itemSize?: number
}

/**
 * @deprecated Removed after 3.0.0, Use `TransferPanelProps` instead.
 */
export const transferPanelProps = buildProps({
  data: transferProps.data,
  direction: {
    type: definePropType<TransferDirection>(String),
    default: 'left',
  },
  optionRender: {
    type: definePropType<(option: TransferDataItem) => VNode | VNode[]>(
      Function
    ),
  },
  placeholder: String,
  title: String,
  filterable: Boolean,
  format: transferProps.format,
  filterMethod: transferProps.filterMethod,
  defaultChecked: transferProps.leftDefaultChecked,
  props: transferProps.props,
  virtualScroll: transferProps.virtualScroll,
  itemSize: transferProps.itemSize,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `TransferPanelProps` instead.
 */
export type TransferPanelPropsPublic = ExtractPublicPropTypes<
  typeof transferPanelProps
>

export const transferPanelEmits = {
  [CHECKED_CHANGE_EVENT]: transferCheckedChangeFn,
}
export type TransferPanelEmits = typeof transferPanelEmits

export type TransferPanelInstance = ComponentInstance<typeof TransferPanel> &
  ComponentExposed<typeof TransferPanel>
