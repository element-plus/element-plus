<template>
  <el-switch v-model="value1" disabled />
  <el-switch v-model="value2" class="ml-2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
