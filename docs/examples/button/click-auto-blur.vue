<template>
  <el-button type="primary" click-auto-blur>Primary</el-button>
  <el-button type="success" click-auto-blur>Success</el-button>
  <el-button type="warning" click-auto-blur>Warning</el-button>

  <el-button-group class="ml-4">
    <el-button type="primary" :icon="Edit" click-auto-blur />
    <el-button type="primary" :icon="Share" click-auto-blur />
    <el-button type="primary" :icon="Delete" click-auto-blur />
  </el-button-group>
</template>

<script setup lang="ts">
import { Delete, Edit, Share } from '@element-plus/icons-vue'
</script>
