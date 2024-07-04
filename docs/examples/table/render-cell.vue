<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180"
      :render-cell="renderCell"
    />
    <el-table-column
      prop="name"
      label="Name"
      width="180"
      :render-cell="renderCell"
    />
    <el-table-column prop="address" label="Address" :render-cell="renderCell" />
  </el-table>
</template>

<script lang="ts" setup>
import { h } from 'vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const renderCell = ({ row, column, $index }) => {
  return h('span', {}, `${row[column.property]} (❤-${$index})`)
}
</script>
