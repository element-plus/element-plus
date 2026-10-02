<template>
  <div class="demo-input-otp">
    <el-input-otp separator="/" />
    <el-input-otp :separator="castSeparator" />
    <el-input-otp>
      <template #separator>•</template>
    </el-input-otp>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

const castSeparator = (index: number) => {
  return index & 1 ? h('span', null, '—') : ''
}
</script>

<style scoped>
.demo-input-otp {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
