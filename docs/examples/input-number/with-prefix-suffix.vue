<template>
  <el-space>
    <el-input-number v-model="num" :min="1" :max="10">
      <template #prefix>
        <span>￥</span>
      </template>
    </el-input-number>
    <el-input-number v-model="num" :min="1" :max="10">
      <template #suffix>
        <span>RMB</span>
      </template>
    </el-input-number>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const num = ref(1)
</script>
