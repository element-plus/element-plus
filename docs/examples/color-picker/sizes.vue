<template>
  <el-space>
    <el-color-picker v-model="color" size="large" />
    <el-color-picker v-model="color" />
    <el-color-picker v-model="color" size="small" />
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('409EFF')
</script>
