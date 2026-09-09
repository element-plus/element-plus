<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { isDark, toggleDark } from '../../composables/dark'
import DarkIcon from '../icons/dark.vue'
import LightIcon from '../icons/light.vue'

import type { SwitchInstance } from 'element-plus'

defineOptions({ inheritAttrs: false })

const darkMode = ref(isDark.value)
const switchRef = ref<SwitchInstance>()
let latestTransitionId = 0

watch(
  () => isDark.value,
  (newVal) => {
    darkMode.value = newVal
  }
)

watch(
  () => darkMode.value,
  (newVal) => {
    if (newVal !== isDark.value) {
      toggleDark()
    }
  }
)

const beforeChange = () => {
  return new Promise<boolean>((resolve) => {
    const isAppearanceTransition =
      // @ts-expect-error
      document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isAppearanceTransition) {
      resolve(true)
      return
    }

    const switchElement = switchRef.value?.$el
    const rect = switchElement.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    const ratioX = (100 * x) / innerWidth
    const ratioY = (100 * y) / innerHeight
    const referR = Math.hypot(innerWidth, innerHeight) / Math.SQRT2
    const ratioR = (100 * endRadius) / referR

    const transitionId = ++latestTransitionId
    const root = document.documentElement
    root.dataset.themeTransition = isDark.value ? 'to-light' : 'to-dark'
    root.style.setProperty('--theme-transition-x', `${ratioX}%`)
    root.style.setProperty('--theme-transition-y', `${ratioY}%`)
    root.style.setProperty('--theme-transition-radius', `${ratioR}%`)

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
      resolve(true)
      await nextTick()
    })

    transition.finished.finally(() => {
      if (transitionId !== latestTransitionId) return

      delete root.dataset.themeTransition
      root.style.removeProperty('--theme-transition-x')
      root.style.removeProperty('--theme-transition-y')
      root.style.removeProperty('--theme-transition-radius')
    })
  })
}
</script>

<template>
  <ClientOnly>
    <el-switch
      ref="switchRef"
      v-model="darkMode"
      v-bind="$attrs"
      :before-change="beforeChange"
      :active-action-icon="DarkIcon"
      :inactive-action-icon="LightIcon"
    />
  </ClientOnly>
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

:deep(.dark-icon) {
  border-radius: 50%;
  color: #cfd3dc;
  background-color: #141414;
}

:deep(.light-icon) {
  color: #606266;
}
</style>
