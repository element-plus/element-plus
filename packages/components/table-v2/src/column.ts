import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type {
  Alignment,
  CellRenderer,
  DataGetter,
  FixedDirection,
  HeaderRenderer,
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
  dataKey: String,
  fixed: {
    type: definePropType<boolean | FixedDirection>([String, Boolean]),
    default: false,
  },
  headerClass: String,
  hidden: Boolean,
  resizable: Boolean,
  style: {
    type: definePropType<StyleValue>(Object),
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
    type: definePropType<CellRenderer<any>>(Function),
  },
  dataGetter: {
    type: definePropType<DataGetter<any>>(Function),
  },
  headerRenderer: {
    type: definePropType<HeaderRenderer<any>>(Function),
  },
} as const)

export type TableV2ColumnProps = ExtractPropTypes<typeof tableV2ColumnProps>
