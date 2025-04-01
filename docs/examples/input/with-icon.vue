<template>
  <div class="flex gap-4 mb-4">
    <span>Using attributes</span>
    <el-input
      v-model="input1"
      style="width: 240px"
      placeholder="Pick a date"
      :suffix-icon="Calendar"
    />
    <el-input
      v-model="input2"
      style="width: 240px"
      placeholder="Type something"
      :prefix-icon="Search"
    />
  </div>
  <div class="flex gap-4">
    <span>Using slots</span>
    <el-input v-model="input3" style="width: 240px" placeholder="Pick a date">
      <template #suffix>
        <el-icon class="el-input__icon"><calendar /></el-icon>
      </template>
    </el-input>
    <el-input
      v-model="input4"
      style="width: 240px"
      placeholder="Type something"
    >
        <template #prefix>
          <div v-if="options.length > 0" class="tag-container">
            <el-tag
              v-for="item in options"
              :key="item.value"
              :closable="true"
              @close="handleTagRemove(item.value)"
            >
              {{ item.label }}
            </el-tag>
          </div>
        </template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
          const options = reactive([
  { value: '1', label: '张三' },
  { value: '2', label: '李四' },
  { value: '3', label: '王五' },
]);
</script>
