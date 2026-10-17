<template>
  <el-masonry :items="items" item-key="id" :columns="3" :gutter="16">
    <template #default="{ item }">
      <div class="masonry-demo-item" :style="{ height: `${item.height}px` }">
        {{ item.id + 1 }}
      </div>
    </template>
  </el-masonry>
</template>

<script lang="ts" setup>
const items = [100, 180, 120, 160, 80, 140, 200, 100, 120].map(
  (height, id) => ({
    id,
    height,
  })
)
</script>

<style scoped>
.masonry-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--el-border-radius-base);
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
