<template>
  <el-tooltip-v2 aria-label="content" show-arrow always-on placement="top">
    <template #trigger>
      <el-button circle>
        <el-icon><Plus /></el-icon>
      </el-button>
    </template>
    Basic tooltip
  </el-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>
