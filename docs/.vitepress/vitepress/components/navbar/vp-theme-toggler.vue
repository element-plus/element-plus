<script setup lang="ts">
import { useTheme } from '../../composables/theme'
import VPSwitch from '../common/vp-switch.vue'
import DarkIcon from '../icons/dark.vue'
import LightIcon from '../icons/light.vue'

const toggle = useTheme()
</script>

<template>
  <div class="theme-toggler-content">
    <VPSwitch @click="toggle">
      <ElIcon :size="13">
        <DarkIcon class="dark-icon" />
        <LightIcon class="light-icon" />
      </ElIcon>
    </VPSwitch>
  </div>
</template>

<style scoped lang="scss">
@import '../../styles/mixins';
.theme-toggler-content {
  @include with-bg;
  border-radius: 50%;
  height: 20px;
  padding: 0 4px;

  .el-icon {
    cursor: pointer;
  }

  .dark-icon,
  .light-icon {
    transition: color var(--el-transition-duration),
      opacity var(--el-transition-duration);
  }

  @at-root .dark & {
    .dark-icon {
      opacity: 1;
    }

    .light-icon {
      opacity: 0;
    }
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
}
</style>
