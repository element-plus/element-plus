import { defineComponent } from 'vue'
import { tableV2HeaderRowProps } from './header-row'

import type { ColumnCellsType } from './types'

const TableV2HeaderRow = defineComponent({
  name: 'ElTableV2HeaderRow',
  props: tableV2HeaderRowProps,
  setup(props, { slots }) {
    return () => {
      const { columns, expandColumnKey, headerIndex, style } = props
      let Cells: ColumnCellsType = columns.map((column, columnIndex) => {
        return slots.cell!({
          columns,
          column,
          columnIndex,
          hasExpandIcon: column.key === expandColumnKey,
          headerIndex,
        })
      })

      if (slots.default) {
        Cells = slots.default({
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
