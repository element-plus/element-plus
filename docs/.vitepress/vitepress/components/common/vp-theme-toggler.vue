<script setup lang="ts">
import { ref, watch } from 'vue'
import { isDark } from '../../composables/dark'
import DarkIcon from '../icons/dark.vue'
import LightIcon from '../icons/light.vue'

const darkMode = ref(isDark.value)

watch(
  () => isDark.value,
  (val) => {
    darkMode.value = val
  }
)
</script>

<template>
  <el-switch
    v-model="darkMode"
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
