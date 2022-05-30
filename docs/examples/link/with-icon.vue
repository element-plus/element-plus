<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <el-link :icon="Edit">Edit</el-link>
    <el-link>
      Check<el-icon class="el-icon--right"><icon-view /></el-icon>
    </el-link>
  </div>
</template>

<style scoped>
.el-link {
  margin-right: 8px;
}
</style>
