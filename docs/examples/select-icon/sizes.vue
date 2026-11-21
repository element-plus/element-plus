<template>
  <div>
    icon-background-size:
    <el-select-v2 v-model="iconBackgroundSize" :options="options" />
    icon-size:
    <el-input-number v-model="iconSize" />
  </div>
  <el-select-icon
    v-model="value"
    :pagination="pagination"
    :icon-background-size="iconBackgroundSize"
    :icon-size="iconSize"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const pagination = reactive({
  currentPage: 1,
  pageSize: 50,
  pagerCount: 5,
  small: true,
  background: true,
})
const value = ref('')
const iconBackgroundSize = ref('default')
const iconSize = ref(24)
const options = reactive([
  {
    label: 'small',
    value: 'small',
  },
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'large',
    value: 'large',
  },
])
</script>
