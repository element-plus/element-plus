<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { DocumentCopy } from '@element-plus/icons-vue'
import { TinyColor, mostReadable } from '@ctrl/tinycolor'
import { useThemeStore } from '../../store/theme'
import { copyThemeText } from '../../utils/theme/copy'
import EpThemeContrast from './ep-theme-contrast.vue'

const { t } = useI18n()
const store = useThemeStore()
const primaryColor = computed(() => store.fullTheme.colors.primary)
const pColor = computed(() => new TinyColor(primaryColor.value))
const previewTextColor = computed(() =>
  mostReadable(primaryColor.value, ['#000', '#fff'])!.toHexString()
)
const hsbString = computed(() => {
  const hsb = pColor.value.toHsv()
  return `${Math.round(hsb.h)}, ${Math.round(hsb.s * 100)}, ${Math.round(hsb.v * 100)}`
})
const colorValues = computed(() => [
  { format: 'HEX', value: primaryColor.value },
  { format: 'RGB', value: pColor.value.toRgbString() },
  { format: 'HSB', value: hsbString.value },
])

function copyColor(value: string) {
  return copyThemeText(value, {
    success: t('editor.copied', { color: value }),
    error: t('editor.copy-error'),
  })
}
</script>

<template>
  <EpThemeColorInput name="primary" />
  <el-card
    class="theme-color-preview"
    shadow="never"
    :body-style="{ backgroundColor: primaryColor, color: previewTextColor }"
  >
    <dl class="theme-color-values">
      <div v-for="item in colorValues" :key="item.format">
        <dt>{{ item.format }}</dt>
        <dd>
          <el-button
            link
            class="theme-color-copy"
            :aria-label="
              t('editor.copy-color', { name: `${item.format}: ${item.value}` })
            "
            :title="t('editor.copy-color', { name: item.format })"
            @click="copyColor(item.value)"
          >
            <span>{{ item.value }}</span>
            <el-icon><DocumentCopy /></el-icon>
          </el-button>
        </dd>
      </div>
    </dl>
  </el-card>
  <EpThemeColorBar class="theme-primary-shades" name="primary" />
  <EpThemeContrast :color="primaryColor" :foreground="previewTextColor" />
</template>

<style scoped>
.theme-color-preview {
  --el-card-padding: 12px;
  --theme-preview-text-color: v-bind(previewTextColor);
  margin-top: 12px;
}
.theme-color-values {
  margin: 0;
  font-size: var(--el-font-size-small);
  line-height: 24px;
}
.theme-color-values > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.theme-color-values dd {
  margin: 0;
  font-family: var(--font-family-mono);
  text-align: right;
}
.theme-color-copy {
  --el-button-text-color: var(--theme-preview-text-color);
  --el-button-hover-link-text-color: var(--theme-preview-text-color);
  --el-button-active-color: var(--theme-preview-text-color);
  min-height: 32px;
  padding: 4px 0;
  font: inherit;
}
.theme-color-copy :deep(> span) {
  gap: 8px;
}
.theme-color-copy:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}
.theme-color-copy:focus-visible {
  outline-color: currentColor;
}
@media (pointer: coarse) {
  .theme-color-copy {
    min-height: 44px;
  }
}
.theme-primary-shades {
  margin: 8px 0 20px;
}
</style>
