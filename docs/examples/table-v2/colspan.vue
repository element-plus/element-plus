<template>
  <el-table-v2
    fixed
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    :column-cache="4"
  >
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

const Row = ({ rowData, rowIndex, cells, columns }) => {
  const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })
  const firstCell = cells[colSpanIndex]
  if (colSpan > 1 && firstCell) {
    let width = Number.parseInt(firstCell.props.style.width)
    for (let i = 1; i < colSpan; i++) {
      const curCell = cells[colSpanIndex + i]
      if (!curCell) continue
      width += Number.parseInt(curCell.props.style.width)
      cells[colSpanIndex + i] = null
    }
    const style = {
      ...firstCell.props.style,
      width: `${width}px`,
      backgroundColor: 'var(--el-color-primary-light-3)',
    }
    cells[colSpanIndex] = cloneVNode(firstCell, { style })
  }
  return cells
}
</script>
