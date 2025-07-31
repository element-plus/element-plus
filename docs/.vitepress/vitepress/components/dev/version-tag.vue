<script lang="ts" setup>
defineProps<{
  version: string
}>()
</script>

<template>
  <el-tag size="small" effect="plain" hit round>
    {{ version }}
  </el-tag>
</template>

<style scoped>
.el-tag {
  margin-left: 0.5rem;
}
</style>
