<template>
  <div class="demo-input-otp">
    <div>
      <p>Numbers only</p>
      <el-input-otp
        v-model="otp1"
        :validator="onlyAllowNumber"
        inputmode="numeric"
      />
    </div>
    <div>
      <p>Letters only</p>
      <el-input-otp v-model="otp2" :validator="onlyAllowLetter" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const otp1 = ref('')
const otp2 = ref('')

const onlyAllowNumber = (value: string) => /^\d$/.test(value)
const onlyAllowLetter = (value: string) => /^[a-zA-Z]$/.test(value)
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
