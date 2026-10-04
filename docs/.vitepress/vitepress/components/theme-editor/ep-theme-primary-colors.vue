<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '../../store/theme'

const { t } = useI18n()
const store = useThemeStore()
const primaryColors = [
  { name: 'blue', color: '#409eff' },
  { name: 'contrast', color: '#0066cc' },
  { name: 'gold', color: '#f3b814' },
  { name: 'turquoise', color: '#13c2c2' },
]
</script>

<template>
  <div class="mb-5">
    <h3 class="text-lg mb-2">{{ t('editor.presets') }}</h3>
    <div class="grid grid-cols-4 gap-2">
      <button
        v-for="item in primaryColors"
        :key="item.name"
        type="button"
        class="theme-preset rounded p-2 text-xs"
        :aria-pressed="item.color === store.fullTheme.colors.primary"
        @click="store.updateColor('primary', item.color)"
      >
        <span
          class="block h-9 rounded mb-2"
          :style="{ backgroundColor: item.color }"
        />
        {{ t(`editor.presets-${item.name}`) }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.theme-preset {
  background: transparent;
  color: inherit;
  cursor: pointer;
  border: 1px solid var(--el-border-color);
}
.theme-preset[aria-pressed='true'],
.theme-preset:hover {
  border-color: var(--el-color-primary);
}
.theme-preset:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 2px;
}
</style>
