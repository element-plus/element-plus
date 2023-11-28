<script lang="ts" setup>
import { COLOR_DARK_LEVEL, COLOR_LIGHT_LEVEL } from '~/utils/theme'

// import { computed } from 'vue'
// import { generateHsvColors, hsvOptions } from '~/utils'

defineProps<{
  name?: string
}>()

// generate hsv colors is a working design, we still use mix colors now
// const hsvColors = computed(() =>
//   generateHsvColors(props.mainColor, {
//     lightLevel: 4,
//     darkLevel: 4,
//     ...hsvOptions,
//   }).reverse()
// )

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
