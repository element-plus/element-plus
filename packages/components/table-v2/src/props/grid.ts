import { V_LIST_ITEM_RENDER_EVT, V_LIST_SCROLL_EVT } from '@element-plus/tokens'
import { useColumnProps } from './column'

import type { CSSProperties, ExtractPropTypes, PropType, VNodeChild } from 'vue'
import type { StyleValue } from '@element-plus/utils/types'

export type ItemSizer = ({
  rowData,
  rowIndex,
}: {
  rowData: any
  rowIndex: number
}) => number

export type HeaderRendererProps = {
  columns: any[]
  headerIndex: number
  style: StyleValue
}

export const useGridCommonProps = {
  bodyWidth: {
    type: Number,
    required: true,
  },

  className: String,

  containerStyle: Object as PropType<CSSProperties>,

  estimatedRowHeight: [Number, Function] as PropType<number | ItemSizer>,

  data: {
    type: Array as PropType<any[]>,
    required: true,
  },

  fixedData: Array as PropType<any[]>,

  getRowHeight: Function as PropType<() => number>,

  height: {
    type: Number,
    required: true,
  },

  hoveredRow: [String, Number] as PropType<string | number>,
  headerRenderer: {
    type: Function as PropType<
      (headerProps: HeaderRendererProps) => VNodeChild
    >,
  },

  rowKey: {
    type: [String, Number] as PropType<string | number>,
    required: true,
  },

  rowRenderer: Function as PropType<
    (opts: { cells: any[]; columns: any[]; headerIdx: number }) => VNodeChild
  >,

  rowHeight: {
    type: Number,
    default: 50,
  },

  style: [String, Object, Array] as PropType<StyleValue>,

  useIsScrolling: Boolean,
  width: {
    type: Number,
    required: true,
  },
}

export const useGridProps = {
  columnCache: {
    type: Number,
    default: 2,
  },
  rowCache: {
    type: Number,
    default: 2,
  },
  headerWidth: {
    type: Number,
    required: true,
  },
  headerHeight: {
    type: [Number, Array] as PropType<number | number[]>,
    required: true,
  },

  ...useGridCommonProps,
  ...useColumnProps,
}

export const useGridEmits = {
  [V_LIST_SCROLL_EVT]: () => undefined,
  [V_LIST_ITEM_RENDER_EVT]: () => [] as number[],
} as const

export type UseGridProps = ExtractPropTypes<typeof useGridProps>
