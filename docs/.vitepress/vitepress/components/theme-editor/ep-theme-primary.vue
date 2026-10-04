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
  <div
    class="rounded p-3 mt-3 text-xs font-mono leading-6"
    :style="{ backgroundColor: primaryColor, color: previewTextColor }"
  >
    <div>HEX: {{ primaryColor }}</div>
    <div>RGB: {{ pColor.toRgbString() }}</div>
    <div>HSB: {{ hsbString }}</div>
  </div>
  <EpThemeColorBar class="my-2" name="primary" />
  <EpThemeContrast :color="primaryColor" :foreground="previewTextColor" />
</template>
