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
    <h4 class="text-sm font-medium">{{ t('editor.contrast') }}</h4>
    <p class="text-xs mt-1">
      {{
        t('editor.contrast-current', {
          color: t(`editor.text-${current.name}`),
          ratio: current.ratio.toFixed(2),
        })
      }}
    </p>
    <div class="theme-contrast-samples mt-2">
      <div
        v-for="sample in samples"
        :key="sample.name"
        class="theme-contrast-sample"
      >
        <div
          class="theme-contrast-preview"
          :style="{ backgroundColor: color, color: sample.color }"
          aria-hidden="true"
        >
          Aa
        </div>
        <div class="p-2 text-xs leading-5">
          <div>{{ t(`editor.text-${sample.name}`) }}</div>
          <div class="font-mono">{{ sample.ratio.toFixed(2) }}:1</div>
          <div>
            {{
              t(
                sample.ratio >= 4.5
                  ? 'editor.contrast-pass'
                  : 'editor.contrast-fail'
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <p class="text-xs mt-2 leading-5">
      <a
        class="theme-contrast-guide"
        href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
        target="_blank"
        rel="noopener noreferrer"
        >{{ t('editor.contrast-help') }}</a
      >
    </p>
    <details class="theme-contrast-details text-xs mt-2 leading-5">
      <summary>{{ t('editor.apca') }}</summary>
      <p>{{ t('editor.apca-help', { value: apca }) }}</p>
    </details>
  </section>
</template>

<style scoped>
.theme-contrast {
  color: var(--el-text-color-regular);
}

.theme-contrast-samples {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.theme-contrast-sample {
  overflow: hidden;
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);
  background: var(--el-bg-color);
}

.theme-contrast-preview {
  padding: 8px;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
}

.theme-contrast-guide {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.theme-contrast-details summary {
  cursor: pointer;
  margin: 0;
  padding: 8px 0;
  font-size: inherit;
  font-weight: normal;
}

@media (pointer: coarse) {
  .theme-contrast-details summary {
    padding: 12px 0;
  }
}
</style>
