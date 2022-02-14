<script setup lang="ts">
import DarkIcon from '../icons/dark.vue'
import LightIcon from '../icons/light.vue'
import VPSwitch from './vp-switch.vue'
</script>

<template>
  <VPSwitch>
    <ElIcon :size="13">
      <DarkIcon class="dark-icon" />
      <LightIcon class="light-icon" />
    </ElIcon>
  </VPSwitch>
</template>

<style lang="scss" scoped>
.el-icon {
  cursor: pointer;
}

.dark-icon,
.light-icon {
  transition: color var(--el-transition-duration),
    opacity var(--el-transition-duration);
}

.light-icon {
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
}

.dark-icon {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

@at-root .dark {
  .dark-icon {
    opacity: 1;
  }

  .light-icon {
    opacity: 0;
  }
}
</style>
