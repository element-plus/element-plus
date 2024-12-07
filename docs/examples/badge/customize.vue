<template>
  <el-badge value="new" class="item">
    <el-button>comments</el-button>
  </el-badge>
  <el-badge value="hot" class="item">
    <el-button>replies</el-button>
  </el-badge>
  <el-badge class="item">
    <el-button>share</el-button>
    <template #content>
      <div class="custom-content">
        <el-icon>
          <Share />
        </el-icon>
        <span>share it</span>
      </div>
    </template>
  </el-badge>
</template>
<script setup lang="ts">
import { Share } from '@element-plus/icons-vue'
</script>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.custom-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
</style>
