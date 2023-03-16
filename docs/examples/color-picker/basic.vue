<template>
  <el-row class="mb-3">
    <el-text class="mr-2">With default value</el-text>
    <el-color-picker v-model="color1" />
  </el-row>
  <el-row>
    <el-text class="mr-2">With no default value</el-text>
    <el-color-picker v-model="color2" />
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color1 = ref('#409EFF')
const color2 = ref()
</script>
