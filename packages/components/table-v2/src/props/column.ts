import {
  buildProps,
  buildProp,
  definePropType,
} from '@element-plus/utils/props'

import type { CSSProperties, ExtractPropTypes, VNodeChild } from 'vue'
import type { StyleValue } from '@element-plus/utils/types'

export type ColumnFixStats = 'left' | 'right' | boolean

// NOTE: T should extend MappedColumn from `helpers/column` but this would cause file circular import
type CellClassGetterParams<T = any> = {
  cellData: any
  rowData: any
  columns: T[]
  column: T
  columnIndex: number
  rowIndex: number
}

// Consider build up this with browser direction.
export const FixedDir = {
  LEFT: 'left',
  RIGHT: 'right',
  DEFAULT: true,
  NONE: false,
}

export const Alignment = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
}

export const headerRenderer = buildProp({
  type: definePropType<
    (props: {
      style: CSSProperties
      columns: any[]
      index: number
    }) => VNodeChild
  >(Function),
} as const)

export const cellRenderer = buildProp({
  type: definePropType<
    (props: {
      style: CSSProperties
      columns: any[]
      data: any[] // data passed from user
      index: number
    }) => VNodeChild
  >(Function),
} as const)

export const tableV2ColumnRendererProps = {
  headerRenderer,
  cellRenderer,
}

export const tableV2ColumnProps = {
  ...tableV2ColumnRendererProps,
  ...buildProps({
    align: {
      type: String,
      values: Object.values(Alignment),
      default: 'left',
    },

    class: {
      type: definePropType<string | ((args: CellClassGetterParams) => string)>([
        String,
        Function,
      ]),
    },

    style: {
      type: definePropType<StyleValue>([String, Object, Array]),
    },

    /**
     * @description user defined data getter.
     */
    dataGetter: {
      type: definePropType<
        (props: {
          columns: any[]
          column: any
          columnIndex: number
          data: any
          rowIndex: number
        }) => any
      >(Function),
    },

    flexGrow: {
      type: Number,
      default: 0,
    },
    flexShrink: {
      type: Number,
      default: 0,
    },
    fixed: {
      type: definePropType<ColumnFixStats>([Boolean, String]),
      values: ['left', 'right', true, false],
    },

    width: {
      type: Number,
      required: true,
    },
  } as const),
  /**
   * @description
   * dataKey is used by column rendering internally
   * when dataGetter is not presented in the props, cell rendering will
   * use _.get(cellData, dataKey) to retrieve data.
   */
  dataKey: String,

  headerClassName: String,
  hidden: Boolean,

  sortable: Boolean,
  title: String,

  maxWidth: Number,
  minWidth: Number,
}

export type TableV2ColumnProps = ExtractPropTypes<typeof tableV2ColumnProps>
export type FixedDirection = typeof FixedDir
