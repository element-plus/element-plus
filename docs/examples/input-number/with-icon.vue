<template>
  <el-input-number
    v-model="input"
    class="w-50 m-2"
    placeholder="Type something"
  >
    <template #prefix> ¥ </template>
  </el-input-number>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref(1)
</script>
