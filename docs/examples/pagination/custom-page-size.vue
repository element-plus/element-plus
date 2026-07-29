<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 50, 100]"
    :page-size-input-min="5"
    :page-size-input-max="200"
    layout="total, size-input, prev, pager, next"
    :total="1000"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(20)
</script>
