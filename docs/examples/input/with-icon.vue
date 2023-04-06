<template>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using attributes</span
      >
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
  </div>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using slots</span
      >
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
<style scoped>
.ml-3 {
  margin-left: 0.75rem;
}
.w-35 {
  width: 8.75rem;
}

.text-gray-600 {
  --un-text-opacity: 1;
  color: rgba(75, 85, 99, var(--un-text-opacity));
}

.inline-flex {
  display: inline-flex;
}

.items-center {
  align-items: center;
}

.w-50 {
  width: 12.5rem; /* 200px */
}

.m-2 {
  margin: 0.5rem; /* 8px */
}
</style>
