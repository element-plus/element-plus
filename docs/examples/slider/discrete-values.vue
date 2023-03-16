<template>
  <el-row class="mr-6">
    <el-text class="w-180px text-right mr-6">Breakpoints not displayed</el-text>
    <el-slider v-model="value1" :step="10" class="w-60% inline-flex" />
  </el-row>

  <el-row class="mr-6">
    <el-text class="w-180px text-right mr-6">Breakpoints displayed</el-text>
    <el-slider
      v-model="value2"
      :step="10"
      show-stops
      class="w-60% inline-flex"
    />
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
</script>
