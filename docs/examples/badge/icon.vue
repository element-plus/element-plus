<template>
  <el-badge class="item">
    <template #icon>
      <InfoFilled />
    </template>
    <el-button> detail info</el-button>
  </el-badge>
  <el-badge class="item" type="primary">
    <template #icon>
      <Share />
    </template>
    <el-button>share</el-button>
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
