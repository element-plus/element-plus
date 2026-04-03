<template>
  <div class="demo-input-otp">
    <div>
      <p>Large</p>
      <el-input-otp v-model="otp1" size="large" />
    </div>
    <div>
      <p>Default</p>
      <el-input-otp v-model="otp2" size="default" />
    </div>
    <div>
      <p>Small</p>
      <el-input-otp v-model="otp3" size="small" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const otp1 = ref('')
const otp2 = ref('')
const otp3 = ref('')
</script>

<style scoped>
.demo-input-otp {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

p {
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
</style>
