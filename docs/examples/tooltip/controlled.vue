<template>
  <el-tooltip :visible="visible">
    <template #content> Content </template>
    <el-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </el-button>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
