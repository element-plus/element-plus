<template>
  <el-tooltip-v2 :aria-label="title">
    <template #trigger>
      <el-button>
        <el-icon><Delete /></el-icon>
      </el-button>
    </template>
    {{ content }}
  </el-tooltip-v2>
</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'

const content = 'Delete'
const title = 'Delete item'
</script>
