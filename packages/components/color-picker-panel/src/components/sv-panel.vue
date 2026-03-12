<template>
  <div :class="rootKls" :style="rootStyle" @click="handleClick">
    <div
      ref="cursorRef"
      :class="cursorKls"
      :style="cursorStyle"
      :tabindex="disabled ? undefined : 0"
      :aria-disabled="disabled"
      role="slider"
      aria-valuemin="0,0"
      aria-valuemax="100,100"
      :aria-label="ariaLabel"
      :aria-valuenow="`${saturation},${brightness}`"
      :aria-valuetext="ariaValuetext"
      @keydown="handleKeydown"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLocale } from '@element-plus/hooks/use-locale'
import { useSvPanel, useSvPanelDOM } from '../composables/use-sv-panel'

import type { SvPanelProps } from '../props/sv-panel'

defineOptions({
  name: 'GSvPanel',
})

const props = defineProps<SvPanelProps>()

const {
  cursorRef,
  cursorTop,
  cursorLeft,
  background,
  saturation,
  brightness,
  handleClick,
  handleDrag,
  handleKeydown,
} = useSvPanel(props)

const { rootKls, cursorKls, rootStyle, cursorStyle, update } = useSvPanelDOM(
  props,
  {
    cursorTop,
    cursorLeft,
    background,
    handleDrag,
  }
)

const { t } = useLocale()

const ariaLabel = computed(() => t('g.colorpicker.svLabel'))
const ariaValuetext = computed(() => {
  return t('g.colorpicker.svDescription', {
    saturation: saturation.value,
    brightness: brightness.value,
    color: props.color.value,
  })
})

defineExpose({
  /**
   * @description update sv panel manually
   */
  update,
})
</script>
