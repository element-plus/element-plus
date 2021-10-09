import { buildProps, definePropType } from '@element-plus/utils/props'

import type { ExtractPropTypes, Component } from 'vue'
import type { MappedColumn } from '../helpers/column'

type RowEventParams = {
  rowData: any
  rowIndex: number
  rowKey: string | number
  event: EventListener
}

type RowHandler = {
  onClick?: (arg: RowEventParams) => void
  onDoubleClick?: (arg: RowEventParams) => void
  onMouseEnter?: (arg: RowEventParams) => void
  onMouseLeave?: (arg: RowEventParams) => void
  onContextMenu?: (arg: RowEventParams) => void
}

type CustomizableComponent = {
  Cell: Component
  ExpandIcon: Component
  HeaderCell: Component
  Sorter: Component
}

export const tableV2Props = buildProps({
  components: {
    type: definePropType<Partial<CustomizableComponent>>(Object),
  },
  columns: {
    type: definePropType<MappedColumn[]>(Array),
  },

  data: {
    type: definePropType<any[]>(Array),
  },

  defaultExpandedKeys: {
    type: definePropType<Array<number | string>>(Array),
  },

  estimatedRowHeight: {
    type: definePropType<number | ((...args: any[]) => number)>([
      Number,
      Function,
    ]),
    default: 50,
  },

  expandedRowKeys: {
    type: definePropType<Array<string | number>>(Array),
  },

  expandColumnKey: {
    type: String,
  },

  rowProps: {
    type: definePropType<any>(Object),
  },

  rowClassName: {
    type: String,
  },

  rowKey: {
    type: definePropType<number | string>([Number, String]),
    default: 'id',
  },

  rowHeight: {
    type: Number,
    default: 50,
  },

  rowEventHandlers: {
    type: definePropType<Record<string, RowHandler>>(Object),
  },

  // Full width for the entire table
  width: {
    type: Number,
    required: true,
  },

  // Full height for the entire table
  height: {
    type: Number,
    required: true,
  },

  rowRenderer: { type: Function },
} as const)

export const tableV2Emits = {
  'row-expand': (_args: {
    expanded: boolean
    rowData: any
    rowIndex: number
    rowKey: string | number
  }) => true,
}

export type TableV2Props = ExtractPropTypes<typeof tableV2Props>
export type TableV2Emits = typeof tableV2Emits
