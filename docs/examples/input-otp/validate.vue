<template>
  <el-input-otp v-model="otp" inputmode="numeric" :validate="validate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const otp = ref('')
const validate = (char: string) => /^\d$/.test(char)
</script>
