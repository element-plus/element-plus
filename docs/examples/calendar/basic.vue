<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>

<template>
  <el-calendar v-model="value" />
</template>
