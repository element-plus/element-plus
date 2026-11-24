<script setup lang="ts">
import { computed } from 'vue'
import { readability } from '@ctrl/tinycolor'
import { computedAsync } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ color: string; foreground: string }>()
const { t } = useI18n()
const samples = computed(() =>
  [
    { name: 'black', color: '#000000' },
    { name: 'white', color: '#ffffff' },
  ].map((sample) => ({
    ...sample,
    ratio: readability(props.color, sample.color),
  }))
)
const current = computed(() =>
  samples.value.find((sample) => sample.color === props.foreground)!
)
const apca = computedAsync(async () => {
  const color = props.color
  const { calcAPCA } = await import('apca-w3')
  return Number(calcAPCA(color, '#fff')).toFixed(1)
}, '—')
</script>

<template>
  <section class="theme-contrast" :aria-label="t('editor.contrast')">
    <h3 class="theme-editor-section-title">{{ t('editor.contrast') }}</h3>
    <p class="theme-contrast-current">
      {{
        t('editor.contrast-current', {
          color: t(`editor.text-${current.name}`),
          ratio: current.ratio.toFixed(2),
        })
      }}
    </p>
    <div class="theme-contrast-samples">
      <el-card
        v-for="sample in samples"
        :key="sample.name"
        class="theme-contrast-sample"
        shadow="never"
        :body-style="{ padding: '0' }"
      >
        <div
          class="theme-contrast-preview"
          :style="{ backgroundColor: color, color: sample.color }"
          aria-hidden="true"
        >
          Aa
        </div>
        <div class="theme-contrast-meta">
          <div class="theme-contrast-line">
            <span>{{ t(`editor.text-${sample.name}`) }}</span>
            <strong class="theme-contrast-ratio"
              >{{ sample.ratio.toFixed(2) }}:1</strong
            >
          </div>
          <el-tag
            :type="sample.ratio >= 4.5 ? 'success' : 'danger'"
            effect="plain"
            size="small"
          >
            {{
              t(
                sample.ratio >= 4.5
                  ? 'editor.contrast-pass'
                  : 'editor.contrast-fail'
              )
            }}
          </el-tag>
        </div>
      </el-card>
    </div>
    <p class="theme-contrast-help">
      <el-link
        class="theme-contrast-guide"
        href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
        target="_blank"
        rel="noopener noreferrer"
        underline="always"
        >{{ t('editor.contrast-help') }}</el-link
      >
    </p>
    <el-collapse class="theme-contrast-details">
      <el-collapse-item name="apca" :title="t('editor.apca')">
        <p class="theme-contrast-help">
          {{ t('editor.apca-help', { value: apca }) }}
        </p>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>

<style scoped>
.theme-contrast {
  color: var(--el-text-color-regular);
  font-size: var(--el-font-size-extra-small);
}
.theme-contrast-current {
  margin: -4px 0 12px;
  line-height: 1.5;
}
.theme-contrast-samples {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}
.theme-contrast-preview {
  padding: 8px;
  font-size: var(--el-font-size-extra-large);
  line-height: 24px;
  text-align: center;
}
.theme-contrast-meta {
  padding: 12px;
}
.theme-contrast-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 8px;
  margin-bottom: 8px;
  font-size: var(--el-font-size-small);
}
.theme-contrast-ratio {
  font-family: var(--font-family-mono);
  font-weight: 500;
}
.theme-contrast-help {
  margin: 12px 0;
  color: var(--el-text-color-regular);
  line-height: 1.5;
}
.theme-contrast-guide {
  font-size: var(--el-font-size-extra-small);
  line-height: 1.5;
  text-align: left;
}
.theme-contrast-details {
  --el-collapse-header-font-size: var(--el-font-size-small);
  --el-collapse-content-font-size: var(--el-font-size-extra-small);
}
.theme-contrast-details :deep(.el-collapse-item__header) {
  height: auto;
  min-height: 48px;
}
.theme-contrast-details :deep(.el-collapse-item__title) {
  flex: 1;
  padding: 8px 0;
  line-height: 1.5;
}
.theme-contrast-details .theme-contrast-help {
  margin: 0;
}
</style>
