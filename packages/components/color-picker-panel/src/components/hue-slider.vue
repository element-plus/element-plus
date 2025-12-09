<template>
  <div :class="rootKls">
    <div ref="bar" :class="barKls" @click="handleClick" />
    <div
      ref="thumb"
      :class="thumbKls"
      :style="thumbStyle"
      :aria-label="ariaLabel"
      :aria-valuenow="currentValue"
      :aria-valuetext="ariaValuetext"
      :aria-orientation="vertical ? 'vertical' : 'horizontal'"
      :aria-valuemin="minValue"
      :aria-valuemax="maxValue"
      role="slider"
      :tabindex="disabled ? undefined : 0"
      :aria-disabled="disabled"
      @keydown="handleKeydown"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLocale } from '@element-plus/hooks'
import { hueSliderProps } from '../props/slider'
import { useSlider, useSliderDOM } from '../composables/use-slider'

defineOptions({
  name: 'ElColorHueSlider',
})

const props = defineProps(hueSliderProps)
const minValue = 0
const maxValue = 360

const { currentValue, bar, thumb, handleDrag, handleClick, handleKeydown } =
  useSlider(props, { key: 'hue', minValue, maxValue })

const { rootKls, barKls, thumbKls, thumbStyle, thumbTop, update } =
  useSliderDOM(props, {
    namespace: 'color-hue-slider',
    maxValue,
    currentValue,
    bar,
    thumb,
    handleDrag,
  })

const { t } = useLocale()

const ariaLabel = computed(() => t('el.colorpicker.hueLabel'))
const ariaValuetext = computed(() => {
  return t('el.colorpicker.hueDescription', {
    hue: currentValue.value,
    color: props.color.value,
  })
})

defineExpose({
  /**
   * @description bar element ref
   */
  bar,
  /**
   * @description thumb element ref
   */
  thumb,
  /**
   * @description thumb top position, only for vertical slider
   */
  thumbTop,
  /**
   * @description update hue slider manually
   */
  update,
})
</script>
