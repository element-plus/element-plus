<script lang="ts" setup>
import { computed } from 'vue'
import { generateHsvColors, hsvOptions } from '~/utils'

const props = defineProps<{
  name?: string
  mainColor: string
}>()

const hsvColors = computed(() =>
  generateHsvColors(props.mainColor, {
    lightLevel: 4,
    darkLevel: 4,
    ...hsvOptions,
  }).reverse()
)
</script>

<template>
  <div class="ep-primary-colors-container overflow-hidden rounded flex">
    <ep-theme-color-box v-for="(color, i) in hsvColors" :key="i" :hsv="color" />
  </div>
</template>
