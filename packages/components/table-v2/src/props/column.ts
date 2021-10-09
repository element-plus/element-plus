import {
  buildProps,
  buildProp,
  definePropType,
} from '@element-plus/utils/props'

import type { CSSProperties, ExtractPropTypes, VNodeChild } from 'vue'

export type ColumnFixStats = 'left' | 'right' | boolean

// Consider build up this with browser direction.
export const FixedDir = {
  LEFT: 'left',
  RIGHT: 'right',
  DEFAULT: true,
  NONE: false,
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
      values: ['left', 'center', 'right'],
      default: 'left',
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
          rowData: any
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
