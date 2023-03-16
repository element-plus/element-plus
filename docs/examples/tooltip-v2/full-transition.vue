<template>
  <el-tooltip-v2 full-transition :transition-props="transitionProps">
    <template #trigger>
      <el-button circle>
        <el-icon><Plus /></el-icon>
      </el-button>
    </template>
    <el-text>content</el-text>
  </el-tooltip-v2>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'

const transitionProps = {
  name: 'el-fade-in-linear',
}
</script>
