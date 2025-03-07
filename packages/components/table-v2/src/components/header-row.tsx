import { defineComponent } from 'vue'
import { isArray } from '@element-plus/utils'
import { tableV2HeaderRowProps } from '../header-row'

import type { CSSProperties } from 'vue'
import type { ColumnCellsType } from '../types'
import type { TableV2HeaderRowProps } from '../header-row'

const TableV2HeaderRow = defineComponent({
  name: 'ElTableV2HeaderRow',
  props: tableV2HeaderRowProps,
  setup(props, { slots }) {
    return () => {
      const { columns, columnsStyles, headerIndex, style } = props
      let Cells: ColumnCellsType = columns.map((column, columnIndex) => {
        return slots.cell!({
          columns,
          column,
          columnIndex,
          headerIndex,
          style: columnsStyles[column.key!],
        })
      })

      if (slots.header) {
        Cells = slots.header({
          cells: Cells.map((node) => {
            if (isArray(node) && node.length === 1) {
              return node[0]
            }
            return node
          }),
          columns,
          headerIndex,
        })
      }

      return (
        <div class={props.class} style={style} role="row">
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
  style: CSSProperties
}

export type TableV2HeaderRowRendererParams = {
  cells: ColumnCellsType
  columns: TableV2HeaderRowProps['columns']
  headerIndex: number
}
