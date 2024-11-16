<template>
  <el-badge :icon="InfoFilled" class="item">detail info</el-badge>
  <el-badge is-dot class="item">
    <template #icon>
      <Share />
    </template>
    <el-button class="share-button" type="primary">share</el-button>
  </el-badge>
</template>

<script lang="ts" setup>
import { InfoFilled, Share } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
