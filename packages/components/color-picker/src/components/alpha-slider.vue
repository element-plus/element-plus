<template>
  <div :class="rootKls">
    <div ref="bar" :class="barKls" :style="barStyle" @click="handleClick" />
    <div ref="thumb" :class="thumbKls" :style="thumbStyle" />
  </div>
</template>

<script lang="ts" setup>
import { alphaSliderProps } from '../props/alpha-slider'
import {
  useAlphaSlider,
  useAlphaSliderDOM,
} from '../composables/use-alpha-slider'

const COMPONENT_NAME = 'ElColorAlphaSlider'

defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(alphaSliderProps)

const { bar, thumb, handleDrag, handleClick } = useAlphaSlider(props)

const { rootKls, barKls, barStyle, thumbKls, thumbStyle } = useAlphaSliderDOM(
  props,
  {
    bar,
    thumb,
    handleDrag,
  }
)
</script>
