<template>
  <el-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </el-table-v2>
</template>

<script lang="ts" setup>
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
  length = 198,
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
const data = generateData(columns, 198)

const rowSpanIndex = 0
columns[rowSpanIndex].rowSpan = ({ rowIndex }) =>
  rowIndex % 5 === 0 ? Math.min(data.length - rowIndex, 5) : 1

const Row = ({ rowData, rowIndex, cells, columns }) => {
  const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })
  const rowHeight = 50
  if (rowSpan > 1) {
    const cell = cells[rowSpanIndex]
    const style = {
      ...cell.props.style,
      backgroundColor: 'var(--el-color-primary-light-3)',
      height: `${rowSpan * rowHeight - 1}px`,
      alignSelf: 'flex-start',
      zIndex: 9,
    }
    cells[rowSpanIndex] = cloneVNode(cell, { style })
  } else {
    const cell = cells[rowSpanIndex]
    const style = {
      ...cell.props.style,
      backgroundColor: 'var(--el-color-primary-light-3)',
      height: `${rowHeight}px`,
      transform: 'translateY(-1px)',
      zIndex: 1,
    }
    cells[rowSpanIndex] = cloneVNode(cell, { style })
  }
  return cells
}
</script>
