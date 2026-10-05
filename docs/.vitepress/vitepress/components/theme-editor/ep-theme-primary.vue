<script lang="ts" setup>
import { computed } from 'vue'
import { TinyColor, mostReadable } from '@ctrl/tinycolor'
import { useThemeStore } from '../../store/theme'
import EpThemeContrast from './ep-theme-contrast.vue'

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
</script>

<template>
  <EpThemeColorInput name="primary" />
  <el-card
    class="theme-color-preview"
    shadow="never"
    :body-style="{ backgroundColor: primaryColor, color: previewTextColor }"
  >
    <dl class="theme-color-values">
      <div>
        <dt>HEX</dt>
        <dd>{{ primaryColor }}</dd>
      </div>
      <div>
        <dt>RGB</dt>
        <dd>{{ pColor.toRgbString() }}</dd>
      </div>
      <div>
        <dt>HSB</dt>
        <dd>{{ hsbString }}</dd>
      </div>
    </dl>
  </el-card>
  <EpThemeColorBar class="theme-primary-shades" name="primary" />
  <EpThemeContrast :color="primaryColor" :foreground="previewTextColor" />
</template>

<style scoped>
.theme-color-preview {
  --el-card-padding: 12px;
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
  gap: 12px;
}
.theme-color-values dd {
  margin: 0;
  font-family: var(--font-family-mono);
  text-align: right;
}
.theme-primary-shades {
  margin: 8px 0 20px;
}
</style>
