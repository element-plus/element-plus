import { isNil } from 'lodash-unified'
import {
  buildProps,
  definePropType,
  isArray,
  mutable,
} from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ExtractPropTypes, h as H, VNode } from 'vue'
import type Transfer from './transfer.vue'

export type TransferKey = string | number
export type TransferDirection = 'left' | 'right'

export type TransferDataItem = Record<string, any>

export type renderContent = (
  h: typeof H,
  option: TransferDataItem
) => VNode | VNode[]

export interface TransferFormat {
  noChecked?: string
  hasChecked?: string
}

export interface TransferPropsAlias {
  label?: string
  key?: string
  disabled?: string
}

export interface TransferCheckedState {
  leftChecked: TransferKey[]
  rightChecked: TransferKey[]
}

export const LEFT_CHECK_CHANGE_EVENT = 'left-check-change'
export const RIGHT_CHECK_CHANGE_EVENT = 'right-check-change'

export const transferProps = buildProps({
  /**
   * @description data source
   */
  data: {
    type: definePropType<TransferDataItem[]>(Array),
    default: () => [],
  },
  /**
   * @description custom list titles
   */
  titles: {
    type: definePropType<[string, string]>(Array),
    default: () => [],
  },
  /**
   * @description custom button texts
   */
  buttonTexts: {
    type: definePropType<[string, string]>(Array),
    default: () => [],
  },
  /**
   * @description placeholder for the filter input
   */
  filterPlaceholder: String,
  /**
   * @description custom filter method
   */
  filterMethod: {
    type: definePropType<(query: string, item: TransferDataItem) => boolean>(
      Function
    ),
  },
  /**
   * @description key array of initially checked data items of the left list
   */
  leftDefaultChecked: {
    type: definePropType<TransferKey[]>(Array),
    default: () => [],
  },
  /**
   * @description key array of initially checked data items of the right list
   */
  rightDefaultChecked: {
    type: definePropType<TransferKey[]>(Array),
    default: () => [],
  },
  /**
   * @description custom render function for data items
   */
  renderContent: {
    type: definePropType<renderContent>(Function),
  },
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<TransferKey[]>(Array),
    default: () => [],
  },
  /**
   * @description texts for checking status in list header
   */
  format: {
    type: definePropType<TransferFormat>(Object),
    default: () => ({}),
  },
  /**
   * @description whether Transfer is filterable
   */
  filterable: Boolean,
  /**
   * @description prop aliases for data source
   */
  props: {
    type: definePropType<TransferPropsAlias>(Object),
    default: () =>
      mutable({
        label: 'label',
        key: 'key',
        disabled: 'disabled',
      } as const),
  },
  /**
   * @description order strategy for elements in the target list. If set to `original`, the elements will keep the same order as the data source. If set to `push`, the newly added elements will be pushed to the bottom. If set to `unshift`, the newly added elements will be inserted on the top
   */
  targetOrder: {
    type: String,
    values: ['original', 'push', 'unshift'],
    default: 'original',
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
} as const)
export type TransferProps = ExtractPropTypes<typeof transferProps>

export const transferCheckedChangeFn = (
  value: TransferKey[],
  movedKeys?: TransferKey[]
) => [value, movedKeys].every(isArray) || (isArray(value) && isNil(movedKeys))

export const transferEmits = {
  [CHANGE_EVENT]: (
    value: TransferKey[],
    direction: TransferDirection,
    movedKeys: TransferKey[]
  ) =>
    [value, movedKeys].every(isArray) && ['left', 'right'].includes(direction),
  [UPDATE_MODEL_EVENT]: (value: TransferKey[]) => isArray(value),
  [LEFT_CHECK_CHANGE_EVENT]: transferCheckedChangeFn,
  [RIGHT_CHECK_CHANGE_EVENT]: transferCheckedChangeFn,
}
export type TransferEmits = typeof transferEmits

export type TransferInstance = InstanceType<typeof Transfer>
