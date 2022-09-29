<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { generateHsvColors } from '~/utils'

const props = defineProps<{
  mainColor: string
}>()

const hsvOptions = reactive({
  saturation: {
    max: 1,
    min: 0.06,
  },
  value: {
    max: 1,
    min: 0.5,
  },
  hStep: 1,
})

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
