<script setup lang="ts">
import { isDark } from '../../composables/dark'
import DarkIcon from '../icons/dark.vue'
import LightIcon from '../icons/light.vue'
</script>

<template>
  <el-switch
    :model-value="isDark"
    :active-action-icon="DarkIcon"
    :inactive-action-icon="LightIcon"
  />
</template>

<style lang="scss" scoped>
:deep(.el-switch__core) {
  --el-switch-on-color: var(--bg-color-mute);
  --el-switch-off-color: var(--bg-color-mute);
  --el-switch-border-color: var(--border-color);
  .el-switch__action {
    width: 14px;
    height: 14px;
  }
}
</style>
