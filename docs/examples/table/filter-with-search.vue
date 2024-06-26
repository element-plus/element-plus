<template>
  <el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%">
    <el-table-column
      prop="name"
      label="Name"
      width="260"
      :filters="tableData.map(({ name }) => ({ text: name, value: name }))"
      :filter-method="filterHandler"
      filter-searchable
      filter-search-placeholder="Filter name..."
    />
    <el-table-column prop="address" label="Address" />

    <el-table-column
      prop="tag"
      label="Tag"
      width="200"
      :filters="[
        { text: 'Football player', value: 'Football player' },
        { text: 'Developer', value: 'Developer' },
        { text: 'Journalist', value: 'Journalist' },
        { text: 'Superhero', value: 'Superhero' },
      ]"
      :filter-method="filterTag"
      :filter-search-icon="null"
      filter-placement="bottom-end"
      filter-searchable
      filter-search-placeholder="Search..."
    >
      <template #default="scope">
        <el-tag type="primary" disable-transitions>{{ scope.row.tag }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TableColumnCtx, TableInstance } from 'element-plus'

interface User {
  name: string
  address: string
  tag: string
}

const tableRef = ref<TableInstance>()

const filterTag = (value: string, row: User) => {
  return row.tag === value
}
const filterHandler = (
  value: string,
  row: User,
  column: TableColumnCtx<User>
) => {
  const property = column['property']
  return row[property] === value
}

const tableData: User[] = [
  {
    name: 'Jordan Henderson',
    address: 'Liverpool, England',
    tag: 'Football player',
  },
  {
    name: 'Son Heung-min',
    address: 'Seoul, Korea',
    tag: 'Football player',
  },
  {
    name: 'Tran Dai Son',
    address: 'Da Nang, Vietnam',
    tag: 'Developer',
  },
  {
    name: 'Jordan Kent',
    address: 'Metropolis, USA',
    tag: 'Journalist',
  },
]
</script>
