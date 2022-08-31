import { buildProps, definePropType } from '@element-plus/utils'
import { virtualizedGridProps } from '@element-plus/components/virtual-list'
import { columns, expandColumnKey, rowKey } from './common'

import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { FixedDirection, KeyType, RowCommonParams } from './types'

export type RowExpandParams = {
  expanded: boolean
  rowKey: KeyType
} & RowCommonParams

export type RowHoverParams = {
  event: MouseEvent
  hovered: boolean
  rowKey: KeyType
} & RowCommonParams

export type RowEventHandlerParams = {
  rowKey: KeyType
  event: Event
} & RowCommonParams

export type RowHeightChangedParams = {
  rowKey: KeyType
  height: number
  rowIndex: number
}

export type RowExpandHandler = (params: RowExpandParams) => void
export type RowHoverHandler = (params: RowHoverParams) => void
export type RowEventHandler = (params: RowEventHandlerParams) => void
export type RowHeightChangeHandler = (
  row: RowHeightChangedParams,
  fixedDirection: boolean | FixedDirection | undefined
) => void

export type RowEventHandlers = {
  onClick?: RowEventHandler
  onContextmenu?: RowEventHandler
  onDblclick?: RowEventHandler
  onMouseenter?: RowEventHandler
  onMouseleave?: RowEventHandler
}

export const tableV2RowProps = buildProps({
  class: String,
  columns,
  columnsStyles: {
    type: definePropType<Record<KeyType, CSSProperties>>(Object),
    required: true,
  },
  depth: Number,
  expandColumnKey,
  estimatedRowHeight: {
    ...virtualizedGridProps.estimatedRowHeight,
    default: undefined,
  },
  isScrolling: Boolean,
  onRowExpand: {
    type: definePropType<RowExpandHandler>(Function),
  },
  onRowHover: {
    type: definePropType<RowHoverHandler>(Function),
  },
  onRowHeightChange: {
    type: definePropType<RowHeightChangeHandler>(Function),
  },
  rowData: {
    type: definePropType<any>(Object),
    required: true,
  },
  rowEventHandlers: {
    type: definePropType<RowEventHandlers>(Object),
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
