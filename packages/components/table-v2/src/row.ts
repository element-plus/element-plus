import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type { Column, FixedDirection, RowCommonParams } from './types'

export type RowExpandParams<T> = {
  expanded: boolean
  rowKey: KeyType
} & RowCommonParams<T>

export type RowHoverParams<T> = {
  event: MouseEvent
} & RowCommonParams<T>

export type RowEventHandlerParams<T> = {
  rowKey: KeyType
  event: Event
} & RowCommonParams<T>

export type RowExpandHandler<T> = (params: RowExpandParams<T>) => void
export type RowHoverHandler<T> = (params: RowHoverParams<T>) => void
export type RowEventHandler<T> = (params: RowEventHandlerParams<T>) => void
export type RowHeightChangeHandler = (
  rowKey: KeyType,
  height: number,
  rowIndex: number,
  fixedDirection: boolean | FixedDirection
) => void

export type RowEventHandlers<T> = {
  click?: RowEventHandler<T>
  contextmenu?: RowEventHandler<T>
  dblclick?: RowEventHandler<T>
  mouseenter?: RowEventHandler<T>
  mouseleave?: RowEventHandler<T>
}

export const tableV2RowProps = buildProps({
  class: String,
  columns: {
    type: definePropType<Column<any>[]>(Array),
    required: true,
  },
  depth: Number,
  expandColumnKey: String,
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
  rowKey: {
    type: definePropType<KeyType>([String, Number, Symbol]),
  },
  style: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
})

export type TableV2RowProps = ExtractPropTypes<typeof tableV2RowProps>
