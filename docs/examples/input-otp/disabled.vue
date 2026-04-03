<template>
  <div class="demo-input-otp">
    <div class="type-wrap">
      <p>Disabled</p>
      <el-input-otp v-model="otp1" disabled />
      <el-input-otp v-model="otp1" disabled type="filled" />
      <el-input-otp v-model="otp1" disabled type="underlined" />
    </div>
    <div class="type-wrap">
      <p>Readonly</p>
      <el-input-otp v-model="otp2" readonly />
      <el-input-otp v-model="otp2" readonly type="filled" />
      <el-input-otp v-model="otp2" readonly type="underlined" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const otp1 = ref('123')
const otp2 = ref('456')
</script>

<style scoped>
.demo-input-otp {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.type-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

p {
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
</style>
