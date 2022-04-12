<template>
  <el-input-number
    v-model="input2"
    class="w-50 m-2"
    placeholder="Type something"
    controls-position="right"
  >
    <template #prefix> ¥ </template>
  </el-input-number>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref(1)
const input2 = ref(1)
</script>
