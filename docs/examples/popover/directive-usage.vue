<template>
  <el-button v-popover="popoverRef"> Click me </el-button>

  <el-popover
    ref="popoverRef"
    trigger="click"
    title="With title"
    virtual-triggering
    persistent
  >
    <span> Some content </span>
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const popoverRef = ref()
</script>
