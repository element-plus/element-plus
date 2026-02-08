<template>
  <div class="demo-input-otp">
    <div class="variant-wrap">
      <p>Disabled</p>
      <el-input-otp v-model="otp1" disabled />
      <el-input-otp v-model="otp1" disabled variant="filled" />
      <el-input-otp v-model="otp1" disabled variant="underlined" />
    </div>
    <div class="variant-wrap">
      <p>Readonly</p>
      <el-input-otp v-model="otp2" readonly />
      <el-input-otp v-model="otp2" readonly variant="filled" />
      <el-input-otp v-model="otp2" readonly variant="underlined" />
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

.variant-wrap {
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
