<template>
  <div>
    icon-color:
    <el-color-picker v-model="iconColor" />
    icon-background-color:
    <el-color-picker v-model="iconBackgroundColor" />
    selected-color:
    <el-color-picker v-model="selectedColor" />
    background-color:
    <el-color-picker v-model="backgroundColor" />
    <el-select-icon
      v-model="value"
      :pagination="pagination"
      :icon-color="iconColor"
      :icon-background-color="iconBackgroundColor"
      :selected-color="selectedColor"
      :background-color="backgroundColor"
    />
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
const iconColor = ref('#000000')
const iconBackgroundColor = ref('#ffffff')
const selectedColor = ref('#409eff')
const backgroundColor = ref('#ffffff')
</script>
