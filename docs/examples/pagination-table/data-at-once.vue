<template>
  <el-pagination-table
    :data="tableData"
    :data-at-once="true"
    style="height: 500px"
  >
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="age" label="Age" />
  </el-pagination-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const tableData = reactive(
  Array.from({ length: 43 }, (v, k) => {
    return {
      id: k + 1,
      name: `name${k + 1}`,
      age: 20 + k,
    }
  })
)
</script>

<style scoped lang="scss"></style>
