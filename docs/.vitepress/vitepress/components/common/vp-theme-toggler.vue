<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { isDark, toggleDark } from '../../composables/dark'
import DarkIcon from '../icons/dark.vue'
import LightIcon from '../icons/light.vue'
import type { SwitchInstance } from 'element-plus'

const darkMode = ref(isDark.value)
const switchRef = ref<SwitchInstance>()

watch(
  () => darkMode.value,
  () => {
    toggleDark()
  }
)

let resolveFn: (value: boolean | PromiseLike<boolean>) => void
const switchTheme = (event: MouseEvent | KeyboardEvent) => {
  const isAppearanceTransition =
    // @ts-expect-error
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition || !event) {
    resolveFn(true)
    return
  }
  let x: number
  let y: number
  if (event instanceof MouseEvent) {
    x = event.clientX
    y = event.clientY
  } else {
    const switchElement = switchRef.value?.$el
    const rect = switchElement.getBoundingClientRect()

    x = rect.left + rect.width / 2
    y = rect.top + rect.height / 2
  }
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    resolveFn(true)
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      }
    )
  })
}
const beforeChange = (): Promise<boolean> => {
  return new Promise((resolve) => {
    resolveFn = resolve
  })
}
</script>

<template>
  <div @click.stop="switchTheme" @keydown.enter.stop="switchTheme">
    <ClientOnly>
      <el-switch
        ref="switchRef"
        v-model="darkMode"
        :before-change="beforeChange"
        :active-action-icon="DarkIcon"
        :inactive-action-icon="LightIcon"
      />
    </ClientOnly>
  </div>
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
