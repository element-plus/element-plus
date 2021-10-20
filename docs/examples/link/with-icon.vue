<template>
  <div>
    <el-link :icon="Edit">Edit</el-link>
    <el-link>
      Check<el-icon class="el-icon--right"><view /></el-icon>
    </el-link>
  </div>
</template>
<script setup lang="ts">
import { Edit, View } from '@element-plus/icons'
</script>
