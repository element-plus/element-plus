import {
  buildProps,
  buildProp,
  definePropType,
} from '@element-plus/utils/props'

import type { CSSProperties, ExtractPropTypes, VNodeChild } from 'vue'

const headerRenderer = buildProp({
  type: definePropType<
    (props: {
      style: CSSProperties
      columns: any[]
      index: number
    }) => VNodeChild
  >(Function),
  required: true,
} as const)

const rowRenderer = buildProp({
  type: definePropType<
    (props: {
      style: CSSProperties
      columns: any[]
      data: any[] // data passed from user
      index: number
    }) => VNodeChild
  >(Function),
  required: true,
} as const)

export const tableV2ColumnRendererProps = {
  headerRenderer,
  rowRenderer,
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

  fixed: Boolean,
  headerClassName: String,
  hidden: Boolean,

  sortable: Boolean,
  title: String,

  maxWidth: Number,
  minWidth: Number,
} as const

export type TableV2ColumnProps = ExtractPropTypes<typeof tableV2ColumnProps>
