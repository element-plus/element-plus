<template>
  <div>
    <div style="margin-bottom: 20px">
      <span style="margin-right: 20px">Total rows: {{ tableData.length }}</span>
      <el-button @click="loadData(10000)">Load 10,000 rows</el-button>
      <el-button @click="loadData(50000)">Load 50,000 rows</el-button>
      <el-button @click="loadData(100000)">Load 100,000 rows</el-button>
    </div>
    <el-table
      :data="tableData"
      :use-virtual="true"
      :height="500"
      :row-height="50"
      :excess-rows="5"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="name" label="Name" width="200" />
      <el-table-column prop="age" label="Age" width="100" />
      <el-table-column prop="email" label="Email" width="250" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface TableRow {
  id: number
  name: string
  age: number
  email: string
  address: string
}

const tableData = ref<TableRow[]>([])

const loadData = (count: number) => {
  const data: TableRow[] = []
  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      name: `User ${i + 1}`,
      age: Math.floor(Math.random() * 50) + 18,
      email: `user${i + 1}@example.com`,
      address: `${Math.floor(Math.random() * 1000)} Main Street, City ${
        Math.floor(Math.random() * 100) + 1
      }`,
    })
  }
  tableData.value = data
}

// Load initial data
loadData(10000)
</script>
