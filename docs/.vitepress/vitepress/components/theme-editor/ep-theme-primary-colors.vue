<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Check } from '@element-plus/icons-vue'
import { mostReadable } from '@ctrl/tinycolor'
import { useThemeStore } from '../../store/theme'

const { t } = useI18n()
const store = useThemeStore()
const primaryColors = [
  { name: 'blue', color: '#409eff' },
  { name: 'contrast', color: '#0066cc' },
  { name: 'gold', color: '#f3b814' },
  { name: 'turquoise', color: '#13c2c2' },
].map((preset) => ({
  ...preset,
  foreground: mostReadable(preset.color, ['#000', '#fff'])!.toHexString(),
}))
</script>

<template>
  <section class="theme-presets" :aria-label="t('editor.presets')">
    <h3 class="theme-editor-section-title">{{ t('editor.presets') }}</h3>
    <div class="theme-presets-grid">
      <el-button
        v-for="item in primaryColors"
        :key="item.name"
        class="theme-preset"
        :aria-pressed="item.color === store.fullTheme.colors.primary"
        @click="store.updateColor('primary', item.color)"
      >
        <span
          class="theme-preset-swatch"
          :style="{ backgroundColor: item.color }"
          aria-hidden="true"
        >
          <el-icon
            v-if="item.color === store.fullTheme.colors.primary"
            :style="{ color: item.foreground }"
            ><Check
          /></el-icon>
        </span>
        <span class="theme-preset-label">{{
          t(`editor.presets-${item.name}`)
        }}</span>
      </el-button>
    </div>
  </section>
</template>

<style scoped>
.theme-presets {
  margin-bottom: 24px;
}
.theme-presets-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}
.theme-preset {
  height: auto;
  min-height: 40px;
  margin: 0;
  padding: 8px 12px;
  color: var(--el-text-color-primary);
}
.theme-preset :deep(> span) {
  width: 100%;
  gap: 8px;
}
.theme-preset-swatch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20px;
  height: 20px;
  border-radius: var(--el-border-radius-small);
}
.theme-preset-label {
  white-space: normal;
  text-align: left;
  line-height: 20px;
}
.theme-preset[aria-pressed='true'] {
  border-color: var(--el-color-primary);
  background: var(--el-fill-color-light);
}
.theme-preset:focus-visible {
  outline: 2px solid var(--el-text-color-primary);
  outline-offset: 2px;
}
@media (pointer: coarse) {
  .theme-preset {
    min-height: 44px;
  }
}
</style>
