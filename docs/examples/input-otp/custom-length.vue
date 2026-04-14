<template>
  <div class="demo-input-otp">
    <el-input-otp v-model="otp1" :length="4" />
    <el-input-otp v-model="otp2" :length="8" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const otp1 = ref('')
const otp2 = ref('')
</script>

<style scoped>
.demo-input-otp {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
