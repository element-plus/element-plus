import { defineComponent } from 'vue'
import { tableV2HeaderRowProps } from '../header-row'

import type { ColumnCellsType } from '../types'
import type { TableV2HeaderRowProps } from '../header-row'

const TableV2HeaderRow = defineComponent({
  name: 'ElTableV2HeaderRow',
  props: tableV2HeaderRowProps,
  setup(props, { slots }) {
    return () => {
      const { columns, headerIndex, style } = props
      let Cells: ColumnCellsType = columns.map((column, columnIndex) => {
        return slots.cell!({
          columns,
          column,
          columnIndex,
          headerIndex,
        })
      })

      if (slots.header) {
        Cells = slots.header({
          cells: Cells,
          columns,
          headerIndex,
        })
      }

      return (
        <div class={props.class} style={style}>
          {Cells}
        </div>
      )
    }
  },
})

export default TableV2HeaderRow

export type TableV2HeaderRowCellRendererParams = {
  columns: TableV2HeaderRowProps['columns']
  column: TableV2HeaderRowProps['columns'][number]
  columnIndex: number
  headerIndex: number
}

export type TableV2HeaderRowRendererParams = {
  cells: ColumnCellsType
  columns: TableV2HeaderRowProps['columns']
  headerIndex: number
}
