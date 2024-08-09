<template>
  <!-- eslint-disable vue/require-toggle-inside-transition  -->
  <el-tooltip-v2 aria-label="content" placement="top" content-class="scale-in">
    <template #trigger>
      <el-button circle>
        <el-icon><Plus /></el-icon>
      </el-button>
    </template>
    <div>content</div>
  </el-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>

<style>
@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.el-tooltip-v2__content.scale-in {
  animation: scale-in var(--el-transition-duration) ease-out forwards;
}
</style>
