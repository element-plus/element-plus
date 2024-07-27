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
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
