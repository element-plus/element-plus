<template>
  <div>
    current-page： {{ currentPage }} page-size： {{ pageSize }}
    <el-button @click="handleAdd">Push a data</el-button>
    <el-button @click="handleDelete">Pop a data</el-button>
  </div>
  <el-pagination-table
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :data="tableData"
    :data-at-once="true"
  >
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="age" label="Age" />
  </el-pagination-table>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)

const tableData = reactive(
  Array.from({ length: 43 }, (v, k) => {
    return {
      id: k + 1,
      name: `name${k + 1}`,
      age: 20 + k,
    }
  })
)

const handleAdd = () => {
  tableData.push({
    id: tableData.length + 1,
    name: `name${tableData.length + 1}`,
    age: 20 + tableData.length,
  })
}

const handleDelete = () => {
  tableData.pop()
}
</script>
