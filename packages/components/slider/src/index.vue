<template>
  <div
    ref="sliderWrapper"
    :class="sliderKls"
    :role="range ? 'group' : undefined"
    :aria-label="range ? groupLabel : undefined"
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
      @touchstart="onSliderDown"
    >
      <div :class="ns.e('bar')" :style="barStyle" />
      <slider-button
        ref="firstButton"
        :model-value="firstValue"
        :vertical="vertical"
        :tooltip-class="tooltipClass"
        role="slider"
        :aria-label="firstButtonLabel"
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
      :debounce="debounce"
      :size="sliderInputSize"
      @update:model-value="setFirstValue"
      @change="emitChange"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import ElInputNumber from '@element-plus/components/input-number'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import {
  debugWarn,
  isValidComponentSize,
  throwError,
} from '@element-plus/utils'
import { useLocale, useNamespace, useSize } from '@element-plus/hooks'
import SliderButton from './button.vue'
import SliderMarker from './marker.vue'
import { useMarks } from './useMarks'
import { useSlide } from './useSlide'
import { useStops } from './useStops'

import type { PropType, Ref } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export default defineComponent({
  name: 'ElSlider',

  components: {
    ElInputNumber,
    SliderButton,
    SliderMarker,
  },

  props: {
    modelValue: {
      type: [Number, Array] as PropType<number | number[]>,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    showInput: {
      type: Boolean,
      default: false,
    },
    showInputControls: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    inputSize: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    showStops: {
      type: Boolean,
      default: false,
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
    formatTooltip: {
      type: Function as PropType<(val: number) => number | string>,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    range: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: '',
    },
    debounce: {
      type: Number,
      default: 300,
    },
    label: {
      type: String,
      default: undefined,
    },
    rangeStartLabel: {
      type: String,
      default: undefined,
    },
    rangeEndLabel: {
      type: String,
      default: undefined,
    },
    formatValueText: {
      type: Function as PropType<(val: number) => string>,
      default: undefined,
    },
    tooltipClass: {
      type: String,
      default: undefined,
    },
    marks: Object,
  },

  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT],

  setup(props, { emit }) {
    const ns = useNamespace('slider')
    const { t } = useLocale()
    const initData = reactive({
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
      onSliderClick,
      onSliderDown,
      setFirstValue,
      setSecondValue,
    } = useSlide(props, initData, emit)

    const { stops, getStopStyle } = useStops(
      props,
      initData,
      minValue,
      maxValue
    )

    const sliderWrapperSize = useSize()
    const sliderInputSize = computed(
      () => props.inputSize || sliderWrapperSize.value
    )

    const groupLabel = computed<string>(() => {
      return (
        props.label ||
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

    useWatch(props, initData, minValue, maxValue, emit, elFormItem)

    const precision = computed(() => {
      const precisions = [props.min, props.max, props.step].map((item) => {
        const decimal = `${item}`.split('.')[1]
        return decimal ? decimal.length : 0
      })
      return Math.max.apply(null, precisions)
    })

    const { sliderWrapper } = useLifecycle(props, initData, resetSize)

    const { firstValue, secondValue, oldValue, dragging, sliderSize } =
      toRefs(initData)

    const updateDragging = (val: boolean) => {
      initData.dragging = val
    }

    provide('SliderProvider', {
      ...toRefs(props),
      sliderSize,
      disabled: sliderDisabled,
      precision,
      emitChange,
      resetSize,
      updateDragging,
    })

    return {
      ns,
      t,
      firstValue,
      secondValue,
      oldValue,
      dragging,
      sliderSize,

      slider,
      groupLabel,
      firstButton,
      firstButtonLabel,
      firstValueText,
      secondButton,
      secondButtonLabel,
      secondValueText,
      sliderDisabled,
      runwayStyle,
      barStyle,
      emitChange,
      onSliderClick,
      onSliderDown,
      getStopStyle,
      setFirstValue,
      setSecondValue,

      stops,
      markList,

      sliderWrapper,
      sliderWrapperSize,
      sliderInputSize,
      sliderKls,
    }
  },
})

const useWatch = (props, initData, minValue, maxValue, emit, elFormItem) => {
  const _emit = (val: number | number[]) => {
    emit(UPDATE_MODEL_EVENT, val)
    emit(INPUT_EVENT, val)
  }

  const valueChanged = () => {
    if (props.range) {
      return ![minValue.value, maxValue.value].every(
        (item, index) => item === initData.oldValue[index]
      )
    } else {
      return props.modelValue !== initData.oldValue
    }
  }

  const setValues = () => {
    if (props.min > props.max) {
      throwError('Slider', 'min should not be greater than max.')
      return
    }
    const val = props.modelValue
    if (props.range && Array.isArray(val)) {
      if (val[1] < props.min) {
        _emit([props.min, props.min])
      } else if (val[0] > props.max) {
        _emit([props.max, props.max])
      } else if (val[0] < props.min) {
        _emit([props.min, val[1]])
      } else if (val[1] > props.max) {
        _emit([val[0], props.max])
      } else {
        initData.firstValue = val[0]
        initData.secondValue = val[1]
        if (valueChanged()) {
          elFormItem.validate?.('change').catch((err) => debugWarn(err))
          initData.oldValue = val.slice()
        }
      }
    } else if (!props.range && typeof val === 'number' && !Number.isNaN(val)) {
      if (val < props.min) {
        _emit(props.min)
      } else if (val > props.max) {
        _emit(props.max)
      } else {
        initData.firstValue = val
        if (valueChanged()) {
          elFormItem.validate?.('change').catch((err) => debugWarn(err))
          initData.oldValue = val
        }
      }
    }
  }

  setValues()

  watch(
    () => initData.dragging,
    (val) => {
      if (!val) {
        setValues()
      }
    }
  )

  watch(
    () => props.modelValue,
    (val, oldVal) => {
      if (
        initData.dragging ||
        (Array.isArray(val) &&
          Array.isArray(oldVal) &&
          val.every((item, index) => item === oldVal[index]) &&
          initData.firstValue === val[0] &&
          initData.secondValue === val[1])
      ) {
        return
      }
      setValues()
    },
    {
      deep: true,
    }
  )

  watch(
    () => [props.min, props.max],
    () => {
      setValues()
    }
  )
}

const useLifecycle = (props, initData, resetSize) => {
  const sliderWrapper: Ref<HTMLElement> = ref()

  onMounted(async () => {
    if (props.range) {
      if (Array.isArray(props.modelValue)) {
        initData.firstValue = Math.max(props.min, props.modelValue[0])
        initData.secondValue = Math.min(props.max, props.modelValue[1])
      } else {
        initData.firstValue = props.min
        initData.secondValue = props.max
      }
      initData.oldValue = [initData.firstValue, initData.secondValue]
    } else {
      if (
        typeof props.modelValue !== 'number' ||
        Number.isNaN(props.modelValue)
      ) {
        initData.firstValue = props.min
      } else {
        initData.firstValue = Math.min(
          props.max,
          Math.max(props.min, props.modelValue)
        )
      }
      initData.oldValue = initData.firstValue
    }

    window.addEventListener('resize', resetSize)

    await nextTick()
    resetSize()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resetSize)
  })

  return {
    sliderWrapper,
  }
}
</script>
