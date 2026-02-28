<template>
  <div>
    <el-input-otp v-model="otp" mask />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const otp = ref('123')
</script>
