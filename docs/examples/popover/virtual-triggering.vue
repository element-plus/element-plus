<template>
  <el-button ref="buttonRef"> Click me </el-button>

  <el-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    title="With title"
    virtual-triggering
  >
    <span> Some content </span>
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const buttonRef = ref()
const popoverRef = ref()
</script>
