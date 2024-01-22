<template>
  <el-page-header :icon="ArrowLeft">
    <template #content>
      <span class="text-lg font-600 mr-3"> Title </span>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
</script>
<style scoped>
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-600 {
  font-weight: 600;
}

.mr-3 {
  margin-right: 0.75rem;
}
</style>
