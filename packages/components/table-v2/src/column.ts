import { buildProps, definePropType } from '@element-plus/utils'

import type { CSSProperties, Component, ExtractPropTypes } from 'vue'
import type {
  Alignment,
  CellRenderer,
  CellRendererParams,
  FixedDirection,
  HeaderCellRenderer,
  HeaderCellRendererParams,
} from './types'

const widthType = {
  type: Number,
  default: undefined,
} as const

export const tableV2ColumnProps = buildProps({
  /**
   * Attributes
   */
  align: {
    type: definePropType<Alignment>(String),
    default: 'left',
  },
  class: String,
  fixed: {
    type: definePropType<boolean | FixedDirection>([String, Boolean]),
    default: false,
  },
  headerClass: String,
  hidden: Boolean,
  resizable: Boolean,
  style: {
    type: definePropType<CSSProperties>(Object),
  },
  sortable: Boolean,
  title: String,

  maxWidth: widthType,
  minWidth: widthType,
  width: {
    type: Number,
    required: true,
  },

  // getters & renderers
  cellRenderer: {
    type: definePropType<
      CellRenderer<any> | Component<CellRendererParams<any>>
    >([Function, Object]),
  },

  headerRenderer: {
    type: definePropType<
      HeaderCellRenderer<any> | Component<HeaderCellRendererParams<any>>
    >([Function, Object]),
  },
} as const)

export type TableV2ColumnProps = ExtractPropTypes<typeof tableV2ColumnProps>
