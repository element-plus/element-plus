<template>
  <el-space direction="vertical">
    <el-space>
      Using attributes
      <el-input-number v-model="num" :min="1" :max="10" prefix-text="￥" />
      <el-input-number v-model="num" :min="1" :max="10" suffix-text="RMB" />
    </el-space>
    <el-space>
      Using slots
      <el-input-number v-model="num" :min="1" :max="10">
        <template #prefix>
          <span style="color: var(--el-color-danger)">￥</span>
        </template>
      </el-input-number>
      <el-input-number v-model="num" :min="1" :max="10">
        <template #suffix>
          <span style="color: var(--el-color-danger)">RMB</span>
        </template>
      </el-input-number>
    </el-space>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const num = ref(1)
</script>
