<template>
  <div>
    <el-input-otp v-model="otp" type="number" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const otp = ref('')
</script>
