<template>
  <el-table-v2
    :columns="columns"
    :data="[]"
    :row-height="40"
    :width="700"
    :height="400"
    :footer-height="50"
  >
    <template #empty>
      <div class="flex items-center justify-center h-100%">
        <el-empty />
      </div>
    </template>
  </el-table-v2>
</template>

<script lang="tsx" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const columns = generateColumns(10)
</script>
