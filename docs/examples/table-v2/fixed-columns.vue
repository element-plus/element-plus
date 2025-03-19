<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :sort-by="sortBy"
    :width="700"
    :height="400"
    fixed
    @column-sort="onSort"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableV2FixedDir, TableV2SortOrder } from 'element-plus'
import type { SortBy } from 'element-plus'

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
let data = generateData(columns, 200)

columns[0].fixed = true
columns[1].fixed = TableV2FixedDir.LEFT
columns[9].fixed = TableV2FixedDir.RIGHT

for (let i = 0; i < 3; i++) columns[i].sortable = true

const sortBy = ref<SortBy>({
  key: 'column-0',
  order: TableV2SortOrder.ASC,
})

const onSort = (_sortBy: SortBy) => {
  data = data.reverse()
  sortBy.value = _sortBy
}
</script>
