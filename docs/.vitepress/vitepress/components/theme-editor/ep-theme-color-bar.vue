<script lang="ts" setup>
import { COLOR_DARK_LEVEL, COLOR_LIGHT_LEVEL } from '~/utils/theme'

defineProps<{ name: string }>()

const colorNames: string[] = []
COLOR_DARK_LEVEL.forEach((l) => {
  colorNames.push(`dark-${l}`)
})
colorNames.push('')
COLOR_LIGHT_LEVEL.forEach((l) => {
  colorNames.push(`light-${l}`)
})
</script>

<template>
  <div
    class="ep-primary-colors-container overflow-hidden rounded"
    flex="~ row-reverse"
  >
    <ep-theme-color-box
      v-for="(colorName, i) in colorNames"
      :key="i"
      :name="name + (colorName ? `-${colorName}` : '')"
    />
  </div>
</template>
