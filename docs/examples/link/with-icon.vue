<template>
  <el-link :icon="Edit">Edit</el-link>
  <el-link>
    Check<el-icon class="el-icon--right"><icon-view /></el-icon>
  </el-link>
</template>

<script lang="ts" setup>
import { Edit, View as IconView } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-link {
  margin-right: 8px;
}
</style>
