<template>
  <el-row class="mb-2">
    <el-link class="w-150px" truncated href="https://element-plus.org">
      This link has its own width set to 150px
    </el-link>
  </el-row>
  <el-row class="w-150px mb-2">
    <el-link truncated href="https://element-plus.org">
      This link is constrained by its parent element
    </el-link>
  </el-row>
  <el-row class="w-150px mb-2">
    <el-link truncated :icon="Edit" href="https://element-plus.org">
      This long link keeps its leading icon visible
    </el-link>
  </el-row>
  <el-row class="w-150px">
    <el-link truncated href="https://element-plus.org">
      This long link keeps its trailing icon visible
      <template #icon>
        <el-icon class="el-icon--right"><View /></el-icon>
      </template>
    </el-link>
  </el-row>
</template>

<script setup lang="ts">
import { Edit, View } from '@element-plus/icons-vue'
</script>
