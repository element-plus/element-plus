<template>
  <div :class="rootKls">
    <div ref="bar" :class="barKls" :style="barStyle" @click="handleClick" />
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
import { alphaSliderProps } from '../props/slider'
import { useSlider, useSliderDOM } from '../composables/use-slider'

defineOptions({
  name: 'ElColorAlphaSlider',
})

const props = defineProps(alphaSliderProps)
const minValue = 0
const maxValue = 100

const { currentValue, bar, thumb, handleDrag, handleClick, handleKeydown } =
  useSlider(props, { key: 'alpha', minValue, maxValue })

const { rootKls, barKls, barStyle, thumbKls, thumbStyle, update } =
  useSliderDOM(props, {
    namespace: 'color-alpha-slider',
    maxValue,
    currentValue,
    bar,
    thumb,
    handleDrag,
    getBackground,
  })

const { t } = useLocale()

const ariaLabel = computed(() => t('el.colorpicker.alphaLabel'))
const ariaValuetext = computed(() => {
  return t('el.colorpicker.alphaDescription', {
    alpha: currentValue.value,
    color: props.color.value,
  })
})

function getBackground() {
  if (props.color && props.color.value) {
    const { r, g, b } = props.color.toRgb()
    return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`
  }
  return ''
}

defineExpose({
  /**
   * @description update alpha slider manually
   * @type {Function}
   */
  update,
  /**
   * @description bar element ref
   * @type {HTMLElement}
   */
  bar,
  /**
   * @description thumb element ref
   * @type {HTMLElement}
   */
  thumb,
})
</script>
