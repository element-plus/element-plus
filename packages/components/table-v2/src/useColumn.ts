import { getCurrentInstance } from 'vue'

import type { CSSProperties, ExtractPropTypes, PropType, VNodeChild } from 'vue'

export interface IElColumn<T> {
  align: 'left' | 'center' | 'right'
  children: IElColumn<T>[]
  className: string | (({ cellData, columns, column, columnIdx, rowData, rowIdx }) => string)
  colSpan: (rowData: T, idx: number) => number
  dataGetter: ({ columns, column, columnIdx, rowData, rowIdx }) => T
  defaultFilteredValue: string[]
  filterIcon: VNodeChild | ((rowData: T, idx: number) => VNodeChild)
  fixed: 'left' | 'right' | true | false
  headerClassName: string | (({ columns, column, columnIdx, headerIdx }) => string)
  headerRenderer: ({ columns, column, columnIdx, headerIdx, container }) => VNodeChild
  hidden: boolean
  key: string | number
  render: ({
    cellData,
    columns,
    column,
    columnIdx,
    rowData,
    rowIdx,
    container,
    isScrolling,
  }) => VNodeChild
  rowSpan: (rowData: T, idx: number) => number
  sortOrder: 'asc' | 'desc' | false
  style: CSSProperties
  title: string
  width: number
}

export const useColumnProps = {
  columns: {
    type: Array as PropType<IElColumn<any>[]>,
  },
}

export const useColumn = () => {
  //
  const vm = getCurrentInstance()

  const props = vm.props as ExtractPropTypes<typeof useColumnProps>
}
