<template>
  <el-row class="items-center">
    <el-radio-group v-model="small" class="mr-4">
      <el-radio-button :label="false">default</el-radio-button>
      <el-radio-button :label="true">small</el-radio-button>
    </el-radio-group>
    background:
    <el-switch v-model="background" class="ml-2" />
    disabled:
    <el-switch v-model="disabled" class="ml-2" />
  </el-row>
  <el-divider />
  <el-text class="block my-2">Total item count</el-text>
  <el-pagination
    v-model:current-page="currentPage1"
    :page-size="100"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="total, prev, pager, next"
    :total="1000"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />

  <el-text class="block my-2">Change page size</el-text>
  <el-pagination
    v-model:current-page="currentPage2"
    v-model:page-size="pageSize2"
    :page-sizes="[100, 200, 300, 400]"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="sizes, prev, pager, next"
    :total="1000"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />

  <el-text class="block my-2">Jump to</el-text>
  <el-pagination
    v-model:current-page="currentPage3"
    v-model:page-size="pageSize3"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="prev, pager, next, jumper"
    :total="1000"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />

  <el-text class="block my-2">All combined</el-text>
  <el-pagination
    v-model:current-page="currentPage4"
    v-model:page-size="pageSize4"
    :page-sizes="[100, 200, 300, 400]"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>
