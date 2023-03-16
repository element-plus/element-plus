<template>
  <el-row :gutter="20">
    <el-text class="ml-3 w-35 text-gray-600 inline-flex items-center">
      Using attributes
    </el-text>
    <el-input
      v-model="input1"
      class="w-50 m-2"
      placeholder="Pick a date"
      :suffix-icon="Calendar"
    />
    <el-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Type something"
      :prefix-icon="Search"
    />
  </el-row>
  <el-row :gutter="20">
    <el-text class="ml-3 w-35 text-gray-600 inline-flex items-center">
      Using slots
    </el-text>
    <el-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
      <template #suffix>
        <el-icon class="el-input__icon"><calendar /></el-icon>
      </template>
    </el-input>
    <el-input v-model="input4" class="w-50 m-2" placeholder="Type something">
      <template #prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
