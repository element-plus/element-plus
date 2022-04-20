import { buildProps, definePropType } from '@element-plus/utils'
import { virtualizedGridProps } from '@element-plus/components/virtual-list'
import { columns, expandColumnKey, rowKey } from './common'

import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { FixedDirection, KeyType, RowCommonParams } from './types'

export type RowExpandParams<T> = {
  expanded: boolean
  rowKey: KeyType
} & RowCommonParams<T>

export type RowHoverParams<T> = {
  event: MouseEvent
  hovered: boolean
  rowKey: KeyType
} & RowCommonParams<T>

export type RowEventHandlerParams<T> = {
  rowKey: KeyType
  event: Event
} & RowCommonParams<T>

export type RowHeightChangedParams = {
  rowKey: KeyType
  height: number
  rowIndex: number
}

export type RowExpandHandler<T> = (params: RowExpandParams<T>) => void
export type RowHoverHandler<T> = (params: RowHoverParams<T>) => void
export type RowEventHandler<T> = (params: RowEventHandlerParams<T>) => void
export type RowHeightChangeHandler = (
  row: RowHeightChangedParams,
  fixedDirection: boolean | FixedDirection | undefined
) => void

export type RowEventHandlers<T> = {
  onClick?: RowEventHandler<T>
  onContextmenu?: RowEventHandler<T>
  onDblclick?: RowEventHandler<T>
  onMouseenter?: RowEventHandler<T>
  onMouseleave?: RowEventHandler<T>
}

export const tableV2RowProps = buildProps({
  class: String,
  columns,
  depth: Number,
  expandColumnKey,
  estimatedRowHeight: {
    ...virtualizedGridProps.estimatedRowHeight,
    default: undefined,
  },
  isScrolling: Boolean,
  onRowExpand: {
    type: definePropType<RowExpandHandler<any>>(Function),
  },
  onRowHover: {
    type: definePropType<RowHoverHandler<any>>(Function),
  },
  onRowHeightChange: {
    type: definePropType<RowHeightChangeHandler>(Function),
  },
  rowData: {
    type: definePropType<any>(Object),
    required: true,
  },
  rowEventHandlers: {
    type: definePropType<RowEventHandlers<any>>(Object),
  },
  rowIndex: {
    type: Number,
    required: true,
  },
  /**
   * Unique item key
   */
  rowKey,
  style: {
    type: definePropType<CSSProperties>(Object),
  },
} as const)

export type TableV2RowProps = ExtractPropTypes<typeof tableV2RowProps>
