<template>
  <el-space direction="vertical">
    <el-rate v-model="value" size="large" />
    <el-rate v-model="value" />
    <el-rate v-model="value" size="small" />
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
