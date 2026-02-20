import { buildProps, definePropType } from '@element-plus/utils'
import { transferCheckedChangeFn, transferProps } from './transfer'

import type {
  ComponentPublicInstance,
  ExtractPublicPropTypes,
  VNode,
} from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type {
  TransferDataItem,
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
  optionRender?: (option: T) => VNode | VNode[]
  placeholder?: string
  title?: string
  filterable?: boolean
  format?: TransferFormat
  filterMethod?: (query: string, item: T) => boolean
  defaultChecked?: TransferKey[]
  props?: TransferPropsAlias
}

/**
 * @deprecated Removed after 3.0.0, Use `TransferPanelProps` instead.
 */
export const transferPanelProps = buildProps({
  data: transferProps.data,
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
