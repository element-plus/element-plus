<template>
  <div>
    You select: {{ value }}
    <el-select-icon v-model="value" :pagination="pagination" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const pagination = reactive({
  currentPage: 1,
  pageSize: 88,
  pagerCount: 5,
  small: true,
  background: true,
})
const value = ref('')
</script>
