<template>
  <el-table-v2
    fixed
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    :cache="2"
    :column-cache="4"
  >
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </el-table-v2>
</template>

<script lang="tsx" setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const colSpanIndex = 1
columns[colSpanIndex].colSpan = ({ rowIndex }) => (rowIndex % 4) + 1
columns[colSpanIndex].align = 'center'

const rowSpanIndex = 0
columns[rowSpanIndex].rowSpan = ({ rowIndex }) =>
  rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1

const Row = ({ rowData, rowIndex, cells, columns }) => {
  const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })
  const firstColSpanCell = cells[colSpanIndex]
  if (colSpan > 1 && firstColSpanCell) {
    let width = Number.parseInt(firstColSpanCell.props.style.width)
    for (let i = 1; i < colSpan; i++) {
      const curCell = cells[colSpanIndex + i]
      if (curCell) {
        width += Number.parseInt(curCell.props.style.width)
      }
      cells[colSpanIndex + i] = null
    }
    const style = {
      ...firstColSpanCell.props.style,
      width: `${width}px`,
      backgroundColor: 'var(--el-color-primary-light-3)',
    }
    cells[colSpanIndex] = cloneVNode(firstColSpanCell, { style })
  }

  const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })
  const firstRowSpanCell = cells[rowSpanIndex]
  if (rowSpan > 1 && firstRowSpanCell) {
    const style = {
      ...firstRowSpanCell.props.style,
      backgroundColor: 'var(--el-color-danger-light-3)',
      height: `${rowSpan * 50}px`,
      alignSelf: 'flex-start',
      zIndex: 1,
    }
    cells[rowSpanIndex] = cloneVNode(firstRowSpanCell, { style })
  } else if (firstRowSpanCell) {
    const style = firstRowSpanCell.props.style
    // override the cell here for creating a pure node without pollute the style
    cells[rowSpanIndex] = (
      <div style={{ ...style, width: `${style.width}px` }} />
    )
  }
  return cells
}
</script>
