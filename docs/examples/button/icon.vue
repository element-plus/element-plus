<template>
  <el-button type="primary" :icon="Edit" />
  <el-button type="primary" :icon="Share" />
  <el-button type="primary" :icon="Delete" />
  <el-button type="primary" :icon="Search">Search</el-button>
  <el-button type="primary">
    Upload<el-icon class="el-icon--right"><Upload /></el-icon>
  </el-button>
</template>

<script lang="ts" setup>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>
