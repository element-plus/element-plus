<template>
  <el-badge is-dot class="item">query</el-badge>
  <el-badge is-dot class="item">
    <el-button class="share-button" :icon="Share" type="primary" />
  </el-badge>
</template>

<script lang="ts" setup>
import { Share } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
