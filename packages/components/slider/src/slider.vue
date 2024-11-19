<template>
  <div
    :id="range ? inputId : undefined"
    ref="sliderWrapper"
    :class="sliderKls"
    :role="range ? 'group' : undefined"
    :aria-label="range && !isLabeledByFormItem ? groupLabel : undefined"
    :aria-labelledby="
      range && isLabeledByFormItem ? elFormItem?.labelId : undefined
    "
  >
    <div
      ref="slider"
      :class="[
        ns.e('runway'),
        { 'show-input': showInput && !range },
        ns.is('disabled', sliderDisabled),
      ]"
      :style="runwayStyle"
      @mousedown="onSliderDown"
      @touchstart.passive="onSliderDown"
    >
      <div :class="ns.e('bar')" :style="barStyle" />
      <slider-button
        :id="!range ? inputId : undefined"
        ref="firstButton"
        :model-value="firstValue"
        :vertical="vertical"
        :tooltip-class="tooltipClass"
        :placement="placement"
        role="slider"
        :aria-label="
          range || !isLabeledByFormItem ? firstButtonLabel : undefined
        "
        :aria-labelledby="
          !range && isLabeledByFormItem ? elFormItem?.labelId : undefined
        "
        :aria-valuemin="min"
        :aria-valuemax="range ? secondValue : max"
        :aria-valuenow="firstValue"
        :aria-valuetext="firstValueText"
        :aria-orientation="vertical ? 'vertical' : 'horizontal'"
        :aria-disabled="sliderDisabled"
        @update:model-value="setFirstValue"
      />
      <slider-button
        v-if="range"
        ref="secondButton"
        :model-value="secondValue"
        :vertical="vertical"
        :tooltip-class="tooltipClass"
        :placement="placement"
        role="slider"
        :aria-label="secondButtonLabel"
        :aria-valuemin="firstValue"
        :aria-valuemax="max"
        :aria-valuenow="secondValue"
        :aria-valuetext="secondValueText"
        :aria-orientation="vertical ? 'vertical' : 'horizontal'"
        :aria-disabled="sliderDisabled"
        @update:model-value="setSecondValue"
      />
      <div v-if="showStops">
        <div
          v-for="(item, key) in stops"
          :key="key"
          :class="ns.e('stop')"
          :style="getStopStyle(item)"
        />
      </div>
      <template v-if="markList.length > 0">
        <div>
          <div
            v-for="(item, key) in markList"
            :key="key"
            :style="getStopStyle(item.position)"
            :class="[ns.e('stop'), ns.e('marks-stop')]"
          />
        </div>
        <div :class="ns.e('marks')">
          <slider-marker
            v-for="(item, key) in markList"
            :key="key"
            :mark="item.mark"
            :style="getStopStyle(item.position)"
            @mousedown.stop="onSliderMarkerDown(item.position)"
          />
        </div>
      </template>
    </div>
    <el-input-number
      v-if="showInput && !range"
      ref="input"
      :model-value="firstValue"
      :class="ns.e('input')"
      :step="step"
      :disabled="sliderDisabled"
      :controls="showInputControls"
      :min="min"
      :max="max"
      :precision="precision"
      :debounce="debounce"
      :size="sliderInputSize"
      @update:model-value="setFirstValue"
      @change="emitChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, reactive, toRefs } from 'vue'
import { useEventListener } from '@vueuse/core'
import ElInputNumber from '@element-plus/components/input-number'
import { useFormItemInputId, useFormSize } from '@element-plus/components/form'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { sliderContextKey } from './constants'
import { sliderEmits, sliderProps } from './slider'
import SliderButton from './button.vue'
import SliderMarker from './marker'
import {
  useLifecycle,
  useMarks,
  useSlide,
  useStops,
  useWatch,
} from './composables'
import type { SliderInitData } from './slider'

defineOptions({
  name: 'ElSlider',
})

const props = defineProps(sliderProps)
const emit = defineEmits(sliderEmits)

const ns = useNamespace('slider')
const { t } = useLocale()

const initData = reactive<SliderInitData>({
  firstValue: 0,
  secondValue: 0,
  oldValue: 0,
  dragging: false,
  sliderSize: 1,
})

const {
  elFormItem,
  slider,
  firstButton,
  secondButton,
  sliderDisabled,
  minValue,
  maxValue,
  runwayStyle,
  barStyle,
  resetSize,
  emitChange,
  onSliderWrapperPrevent,
  onSliderClick,
  onSliderDown,
  onSliderMarkerDown,
  setFirstValue,
  setSecondValue,
} = useSlide(props, initData, emit)

const { stops, getStopStyle } = useStops(props, initData, minValue, maxValue)

const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: elFormItem,
})

const sliderWrapperSize = useFormSize()
const sliderInputSize = computed(
  () => props.inputSize || sliderWrapperSize.value
)

const groupLabel = computed<string>(() => {
  return (
    props.ariaLabel ||
    t('el.slider.defaultLabel', {
      min: props.min,
      max: props.max,
    })
  )
})

const firstButtonLabel = computed<string>(() => {
  if (props.range) {
    return props.rangeStartLabel || t('el.slider.defaultRangeStartLabel')
  } else {
    return groupLabel.value
  }
})

const firstValueText = computed<string>(() => {
  return props.formatValueText
    ? props.formatValueText(firstValue.value)
    : `${firstValue.value}`
})

const secondButtonLabel = computed<string>(() => {
  return props.rangeEndLabel || t('el.slider.defaultRangeEndLabel')
})

const secondValueText = computed<string>(() => {
  return props.formatValueText
    ? props.formatValueText(secondValue.value)
    : `${secondValue.value}`
})

const sliderKls = computed(() => [
  ns.b(),
  ns.m(sliderWrapperSize.value),
  ns.is('vertical', props.vertical),
  { [ns.m('with-input')]: props.showInput },
])

const markList = useMarks(props)

useWatch(props, initData, minValue, maxValue, emit, elFormItem!)

const precision = computed(() => {
  const precisions = [props.min, props.max, props.step].map((item) => {
    const decimal = `${item}`.split('.')[1]
    return decimal ? decimal.length : 0
  })
  return Math.max.apply(null, precisions)
})

const { sliderWrapper } = useLifecycle(props, initData, resetSize)

const { firstValue, secondValue, sliderSize } = toRefs(initData)

const updateDragging = (val: boolean) => {
  initData.dragging = val
}

useEventListener(sliderWrapper, 'touchstart', onSliderWrapperPrevent, {
  passive: false,
})
useEventListener(sliderWrapper, 'touchmove', onSliderWrapperPrevent, {
  passive: false,
})

provide(sliderContextKey, {
  ...toRefs(props),
  sliderSize,
  disabled: sliderDisabled,
  precision,
  emitChange,
  resetSize,
  updateDragging,
})

defineExpose({
  onSliderClick,
})
</script>
