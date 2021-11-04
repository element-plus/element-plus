<template>
  <div class="demo-input-suffix">
    <span class="demo-input-label">Using attributes</span>
    <el-row :gutter="20">
      <el-input
        v-model="input1"
        placeholder="Pick a date"
        :suffix-icon="Calendar"
      />
    </el-row>
    <el-row :gutter="20">
      <el-input
        v-model="input2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
    </el-row>
  </div>
  <div class="demo-input-suffix">
    <span class="demo-input-label">Using slots</span>
    <el-row :gutter="20">
      <el-input v-model="input3" placeholder="Pick a date">
        <template #suffix>
          <el-icon class="el-input__icon"><calendar /></el-icon>
        </template>
      </el-input>
    </el-row>

    <el-row :gutter="20">
      <el-input v-model="input4" placeholder="Type something">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>

<style>
.demo-input-label {
  display: inline-block;
  width: 130px;
}

.demo-input-suffix {
  margin-bottom: 16px;
}
</style>
