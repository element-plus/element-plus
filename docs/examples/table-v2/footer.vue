<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :row-height="40"
    :width="700"
    :height="400"
    :footer-height="50"
    fixed
  >
    <template #footer
      ><div
        class="flex items-center"
        style="
          justify-content: center;
          height: 100%;
          background-color: var(--el-color-primary-light-7);
        "
      >
        Display a message in the footer
      </div>
    </template>
  </el-table-v2>
</template>

<script lang="ts" setup>
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
</script>
