<template>
  <div>
    <el-select-icon v-model="value" :pagination="pagination">
      <template #icon="{ iconItem }">
        <!-- example <my-icon :name="iconItem.name" /> -->
        <div>{{ iconItem.name }}</div>
      </template>
    </el-select-icon>
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
