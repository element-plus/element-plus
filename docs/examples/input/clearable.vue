<template>
  <el-input v-model="input" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
