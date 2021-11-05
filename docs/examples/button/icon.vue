<template>
  <el-button type="primary" :icon="Edit"></el-button>
  <el-button type="primary" :icon="Share"></el-button>
  <el-button type="primary" :icon="Delete"></el-button>
  <el-button type="primary" :icon="Search">Search</el-button>
  <el-button type="primary">
    Upload<el-icon class="el-icon--right"><Upload /></el-icon>
  </el-button>
</template>
<script setup lang="ts">
import { Edit, Share, Delete, Search, Upload } from '@element-plus/icons'
</script>
