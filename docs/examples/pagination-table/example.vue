<template>
  <div>
    current-page： {{ currentPage }} page-size： {{ pageSize }}
    <el-button @click="toggleSelection([tableData[1], tableData[2]])"
      >Toggle selection status of second and third rows</el-button
    >
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div>
  <el-pagination-table
    ref="paginationTableRef"
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    v-loading="loading"
    style="height: 600px"
    :data="tableData"
    :total="total"
    :small="true"
    layout="total, sizes, prev, pager, next, jumper"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
    @row-click="handleRowClick"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="age" label="Age" />
  </el-pagination-table>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const paginationTableRef = ref()

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(125)

const loading = ref(false)

const tableData = ref<any[]>(
  Array.from({ length: pageSize.value }, (v, k) => {
    return {
      id: k + 1,
      name: `name${k + 1}`,
      age: 20 + k,
    }
  })
)

const query = () => {
  loading.value = true
  setTimeout(() => {
    tableData.value = Array.from({ length: pageSize.value }, (v, k) => {
      return {
        id: (currentPage.value - 1) * pageSize.value + k + 1,
        name: `name${(currentPage.value - 1) * pageSize.value + k + 1}`,
        age: `${20 + (currentPage.value - 1) * pageSize.value + k + 1}岁`,
      }
    })

    loading.value = false
  }, 1000)
}

const handleSizeChange = (val: number) => {
  console.log('handleSizeChange', val)
  query()
}

const handleCurrentChange = (val: number) => {
  console.log('handleCurrentChange', val)
  query()
}

const handleRowClick = (row: any, event: any, column: any) => {
  console.log('handleRowClick', row, event, column)
}

const handleSelectionChange = (val: any) => {
  console.log('handleSelectionChange', val)
}

const toggleSelection = (rows?: any[]) => {
  if (rows) {
    rows.forEach((row) => {
      paginationTableRef.value!.tableRef.toggleRowSelection(row, undefined)
    })
  } else {
    paginationTableRef.value!.tableRef.clearSelection()
  }
}
</script>

<style scoped lang="scss"></style>
